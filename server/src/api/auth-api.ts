import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { JWT_NAME, JWT_SECRET, JWT_EXPIRATION } from "../config/constant";


const loginBodySchema = t.Object({
    email: t.String({ format: "email" }),
    password: t.String({ minLength: 8 }),
  });


const AuthApi = new Elysia({
    prefix: "/auth",
    normalize: true,
    detail: {
        tags: ["Auth"]
    }
}).use(jwt({
    name: JWT_NAME,
    secret: JWT_SECRET!,
    exp: JWT_EXPIRATION
})).post("/login", async ({body, jwt}) => {
    const accessJWTToken = await jwt.sign({
        sub: body.email,
        exp: JWT_EXPIRATION,
      });
    return {
        data: {
            accessToken: accessJWTToken,
            message: "Login successful",
            success: true
        }
    }
}, {
    body: loginBodySchema
})

export default AuthApi;