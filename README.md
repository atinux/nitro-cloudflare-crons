# Using Cloudflare Crons with Nitro

This is an example of using [Nitro scheduled tasks](https://nitro.unjs.io/guide/tasks#scheduled-tasks) with Cloudflare Workers [Crons Triggers](https://developers.cloudflare.com/workers/configuration/cron-triggers/).

## Setup

Install dependencies

```bash
pnpm i
```

## Development

Start the dev server

```bash
pnpm dev
```

You can specify the scheduled tasks in development mode in [`nitro.config.ts`](./nitro.config.ts).

For production, make sure to add the same cron patterns in [`wrangler.toml`](./wrangler.toml).

## Deploy

Build your Nitro API:

```bash
pnpm build
```

Deploy with Wrangler CLI:

```bash
npx wrangler deploy
```

## License

[MIT](./LICENSE)
