import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { JWT_NAME, JWT_SECRET, JWT_EXPIRATION } from "../config/constant";
import { protectDynamic } from "../plugin/protect-dynamic";
import { createUser, getUserByDynamicId } from "../lib/user";

const LoginApi = new Elysia({
  prefix: "/auth",
  normalize: true,
  detail: {
    tags: ["Auth"],
  },
})
  .use(protectDynamic)
  .use(
    jwt({
      name: JWT_NAME,
      secret: JWT_SECRET!,
      exp: JWT_EXPIRATION,
    })
  )
  .post(
    "/login",
    async ({ body, jwt, dynamicUser }) => {
      const user = await getUserByDynamicId(dynamicUser.id);
      if (!user) {
        const newUser = await createUser({
          dynamicId: dynamicUser.id,
          phone: body.phone,
        });
        const accessJWTToken = await jwt.sign({
          sub: newUser.id,
          exp: JWT_EXPIRATION,
        });
        return {
          accessToken: accessJWTToken,
          message: "Login successful",
          success: true,
        };
      }
      return {
        accessToken: jwt.sign({
          sub: user.id,
          exp: JWT_EXPIRATION,
       }),
        message: "Login successful",
        success: true,
      };
    },
    {
      body: t.Object({
        phone: t.String(),
      }),
    }
  );

export { LoginApi };
