import { Elysia } from "elysia";
import { LoginApi, RefreshTokenApi } from "./auth-api";

const Api = new Elysia({
  prefix: "/api/v1",
  normalize: true,
  detail: {
    tags: ["API"],
  },
})
  .onError(({ error }) => {
    return new Response(error.toString());
  })
  .use(LoginApi)
  .use(RefreshTokenApi);

export default Api;
