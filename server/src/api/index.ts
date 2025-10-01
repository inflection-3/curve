import { Elysia } from "elysia";
import { LoginApi } from "./auth-api";

const Api = new Elysia({
  prefix: "/api/v1",
  normalize: true,
  detail: {
    tags: ["API"],
  },
})
  .use(LoginApi)

export default Api;
