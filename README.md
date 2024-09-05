# Using Cloudflare Crons Triggers with Nitro ⏲️

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

## Example

This example adds a `my-task` scheduled task that runs every minute.

```ts
// server/tasks/my-task.ts
export default defineTask({
  meta: {
    name: "my-task",
    description: "A specific task",
  },
  run({ payload, context }) {
    console.log("Running my task...");

    // Example of calling an external API that don't support crons
    // $fetch('https://my-nuxt-app.com/api/my-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: 'token MY_SECRET_TOKEN'
    //   }
    // })

    return { result: "Success" };
  },
});
```

In the `nitro.config.ts`:

```ts
// nitro.config.ts
export default defineNitroConfig({
  experimental: {
    tasks: true
  },
  scheduledTasks: {
    '* * * * *': ['my-task']
  },
});
```

In the `wrangler.toml`:

```toml
[triggers]
crons = ["* * * * *"]
```

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
