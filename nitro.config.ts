//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  experimental: {
    tasks: true
  },
  scheduledTasks: {
    '* * * * *': ['my-task']
  },
  preset: 'cloudflare-module'
});
