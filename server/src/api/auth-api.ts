import { Elysia, t } from "elysia";
import { protectDynamic } from "../plugin/protect-dynamic";
import { createUser, getUserByDynamicId } from "../lib/user";
import { generateTokens, verifyRefreshToken, storeRefreshToken, getRefreshToken, deleteRefreshToken } from "../lib/auth";
import openapi from "@elysiajs/openapi";


const LoginApi = new Elysia({
  prefix: "/auth",
  normalize: true,
  detail: {
    tags: ["Auth"],
  },
})
  .use(protectDynamic)
  .post(
    "/login",
    async ({status, body, dynamicUser }) => {
      const user = await getUserByDynamicId(dynamicUser.id);
      if (!user) {
        const newUser = await createUser({
          dynamicId: dynamicUser.id,
          phone: body.phone,
        });

        const tokens = await generateTokens(newUser.id);
        await storeRefreshToken({ userId: newUser.id, token: tokens.refreshToken });
        
        return {
          ...tokens,
          message: "Login successful",
          success: true,
        };
      }
      const tokens = await generateTokens(user.id);
      await storeRefreshToken({ userId: user.id, token: tokens.refreshToken });
      
      return status(200, {
        ...tokens,
        message: "Login successful",
        success: true,
      })  ;
    },
    {
      body: t.Object({
        phone: t.String(
          {
            minLength: 10,
            maxLength: 10,
            pattern: "^[0-9]+$",
          }
        ),
      }),
    }
);


const RefreshTokenApi = new Elysia({
  prefix: "/auth",
  normalize: true,
  detail: {
    tags: ["Auth"],
  },
}).use(openapi())
  .post("/refresh-token", async ({ body ,status}) => {
      const refreshToken = body.refreshToken;
      
      const payload = await verifyRefreshToken(refreshToken);
      
      const storedToken = await getRefreshToken(refreshToken);
      
      if (!storedToken) {
        await deleteRefreshToken(refreshToken);
        return status(403, {
          message: "Invalid refresh token",
          success: false,
        });
      }

      const tokens = await generateTokens(payload.userId);
      await storeRefreshToken({ userId: payload.userId, token: tokens.refreshToken });

      return status(200, {
        ...tokens,
        message: "Tokens refreshed successfully",
        success: true,
      });
  }, {
    body: t.Object({
      refreshToken: t.String({
        minLength: 256,
        maxLength: 256,
      }),
    }),
  });

export { LoginApi, RefreshTokenApi };
