import { jwt } from '@elysiajs/jwt'

import { t } from 'elysia';

import Elysia from "elysia";
import { JWT_SECRET, JWT_EXPIRATION, JWT_NAME } from "../config/constant";
import openapi from '@elysiajs/openapi';

const protectApi = (app: Elysia) => app
    .use(jwt({
        name: JWT_NAME,
        secret: JWT_SECRET!,
        exp: JWT_EXPIRATION
    }))
    .guard({
        headers: t.Object({
            authorization: t.String()
        })
    })
    .derive(async ({ jwt, headers, set }) => {
        const authorization = headers.authorization

        if (!authorization) {
            set.status = 401
            throw new Error('Authorization header is required')
        }

        const token = authorization.startsWith('Bearer ') 
            ? authorization.slice(7) 
            : authorization

        const payload = await jwt.verify(token)

        if (!payload) {
            set.status = 401
            throw new Error('Invalid or expired token')
        }

        set.status = 200
        return { user: payload }
    }).use(openapi())


    export { protectApi }