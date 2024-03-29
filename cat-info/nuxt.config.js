// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: 'ROs2srBatyRkrrKmK96oxwtt' }]],
  apiOptions: {
    region: "eu",
  }
})
