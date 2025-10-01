import { Elysia } from "elysia";
import Api from "./api";
import { openapi } from '@elysiajs/openapi'
import { cors } from '@elysiajs/cors'



export const app = new Elysia()
.use(cors())
.use(openapi())
.use(Api)
.get("/", () => {
  return {
    data: {
      version: "1.0.0",
    },
    message: "Inflection API",
    success: true
  }
})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


