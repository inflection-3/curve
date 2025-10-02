import { treaty } from '@elysiajs/eden'
import type { App } from 'server'

export const client = treaty<App>('localhost:3000')


client.api.v1.auth.login.post({
    phone: '081234567890'
}, {
    headers: {
        'x-dynamic-access-token': 'your-dynamic-token-here'
    }
})