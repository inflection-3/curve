import Elysia, { t } from 'elysia';
import openapi from '@elysiajs/openapi';
import { extractToken, verifyTokenDynamicToken } from '../lib/dynamic';

const protectDynamic = (app: Elysia) =>
  app
    .guard({
      headers: t.Object({
        'x-dynamic-access-token': t.String(),
      }),
    })
    .derive(async ({ headers, set }) => {
      try {
        const authHeader = headers['x-dynamic-access-token'];
        const token = extractToken(authHeader);

        if (!token) {
          set.status = 401;
          throw new Error('Dynamic Authorization token required');
        }

        const decodedToken = await verifyTokenDynamicToken(token);

        set.status = 200;
        return {
          dynamicUser: {
            id: decodedToken.sub || decodedToken.id,
            payload: decodedToken,
          },
        };
      } catch (error) {
        set.status = 401;
        const message = error instanceof Error ? error.message : 'Authentication failed';
        throw new Error(message);
      }
    })
    .use(openapi());

export { protectDynamic };