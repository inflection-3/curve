import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { JWT_NAME, JWT_SECRET, JWT_EXPIRATION } from "../config/constant";
import { protectDynamic } from "../plugin/protect-dynamic";


const loginBodySchema = t.Object({
    email: t.String({ format: "email" }),
    password: t.String({ minLength: 8 }),
  });


 const LoginApi = new Elysia({
    prefix: "/auth",
    normalize: true,
    detail: {
        tags: ["Auth"]
    }
}).use(protectDynamic).use(jwt({
    name: JWT_NAME,
    secret: JWT_SECRET!,
    exp: JWT_EXPIRATION
})).post("/login", async ({body, jwt}) => {
    const accessJWTToken = await jwt.sign({
        sub: body.email,
        exp: JWT_EXPIRATION,
      });
    return {
            accessToken: accessJWTToken,
            message: "Login successful",
            success: true
    }
}, {
    body: loginBodySchema
})

export { LoginApi }