import { treaty } from '@elysiajs/eden'
import type { App } from 'server'

export const client = treaty<App>('localhost:3000')
