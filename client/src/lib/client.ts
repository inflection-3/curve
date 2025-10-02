import { treaty } from '@elysiajs/eden'
import type { App } from 'server'

const serverUrl = 'localhost:3000'

const refreshTokenClient = treaty<App>(serverUrl)


export const client = treaty<App>(serverUrl, {
    headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    onResponse: [
        async (response) => {
            if (response.status === 401) {
                const refreshToken = localStorage.getItem("refreshToken");
                const {data, error} = await refreshTokenClient.api.v1.auth["refresh-token"].post({
                    refreshToken: refreshToken || "",
                });
                if(error) {
                    return response;
                }
                localStorage.setItem("accessToken", data.accessToken || "");
                localStorage.setItem("refreshToken", data.refreshToken || "");
                return response;
            }
            return response
        },
       (response) => {
        if(response.status === 403) {
            window.location.href = "/login";
        }
       } 

    ] 
})
