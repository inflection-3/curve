
import { t } from 'elysia';

import Elysia from "elysia";
import openapi from '@elysiajs/openapi';
import { verifyAccessToken } from '../lib/auth';

const protectApi = (app: Elysia) => app
    .guard({
        headers: t.Object({
            authorization: t.String()
        })
    })
    .derive(async ({ headers, set }) => {
        const authorization = headers.authorization

        if (!authorization) {
            set.status = 401
            throw new Error('Authorization header is required')
        }

        const token = authorization.startsWith('Bearer ') 
            ? authorization.slice(7) 
            : authorization

        const payload = await verifyAccessToken(token)

        if (!payload) {
            set.status = 401
            throw new Error('Invalid or expired token')
        }

        set.status = 200
        return { user: payload?.userId }
    }).use(openapi())


    export { protectApi }