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