import { Elysia } from "elysia";
import { protectApi } from "../plugin/protect-api";
import AuthApi from "./auth-api";

const Api = new Elysia(
    {
        prefix: "/api/v1",
        normalize: true,
        detail: {
            tags: ["API"]
        }
    }
).use(AuthApi).use(protectApi).get("/", () => {
    return {
        data: {
            message: "Hello World",
            success: true
        }
    }
})


export default Api;