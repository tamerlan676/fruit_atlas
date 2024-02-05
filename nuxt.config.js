export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '▷ Доставка фруктов и овощей по Москве и Московской области',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Хотите заказать свежие фрукты и овощи с доставкой на дом? Наш интернет-магазин предлагает широкий выбор фруктов и овощей высокого качества. Мы работаем только с надежными поставщиками, что гарантирует свежесть и полезность наших продуктов. Закажите сейчас и наслаждайтесь здоровым питанием!' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '92446370',
        webvisor: true
      }
    ]
  ],

  router: {
    scrollBehavior (to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.scrollY - 100,
          behavior: 'smooth'
        })
      }
      return { x: 0, y: 0 }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  generate: {
    fallback: true 
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
