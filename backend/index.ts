import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json('Hello Bun!'));

export default {
    port: 3000,
    fetch: app.fetch,
};
