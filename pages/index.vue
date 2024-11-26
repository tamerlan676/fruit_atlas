<template lang="pug">
.main 
  HeroCenter(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup")
  Categories
  Chess(:title="chessTitle" :desc="chessDesc" :chessList="chessList")
  Hits(:hits="fruitsHits" category="fruits" title="Сезонные фрукты" link="https://fruit-atlas.ru/categories/fruits")
  Hits(:hits="vegetablesHits" category="vegetables" title="Сезонные овощи" link="https://fruit-atlas.ru/categories/vegetables")
  .divider
  Banner(:title="bannerTitle" :desc="bannerDesc" :img="bannerImg")
  Numbers
  Reviews
  Questions
  BannerBonus
  Articles(:articles="articles")
  Popup(:showPopup="showPopup" @showPopup="showPopup")
</template>

<script>
export default{
  data() {
    return {
       script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fruit Atlas",
            "image": "https://fruit-atlas.ru/logo.png",
            "url": "fruit-atlas.ru",
            "description": "Доставка свежих фруктов и овощей в Москве. Fruit Atlas — быстрая доставка, качественные продукты. Оплата при получении.",
            "telephone": "+7 (918) 820-80-97",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ]
          }
        },
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Меню доставки фруктов",
            "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "О Нас",
                "url": "https://fruit-atlas.ru/about"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Фрукты",
                "url": "https://fruit-atlas.ru/categories/fruits"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Овощи",
                "url": "https://fruit-atlas.ru/categories/vegetables"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Экзотические фрукты",
                "url": "https://fruit-atlas.ru/categories/vegetables"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Контакты",
                "url": "https://fruit-atlas.ru/contacts"
              },
              {
                "@type": "ListItem",
                "position":6,
                "name": "Доставка",
                "url": "https://fruit-atlas.ru/delivery"
              }
      ],
      heroTitle: `Доставка фруктов и овощей по Москве`,
      heroDesc: `Мы предлагаем быструю и удобную доставку свежих фруктов, прямо к вашему порогу. <br>Свяжитесь с нами и мы раскажем вам все подробности`,
      chessTitle: 'Преимущества при работе с нами',
      chessDesc: 'Мы стремимся работать так, чтобы к нам возвращались снова и снова',
      chessList: [
        {
          title: 'Безупречное качество',
          desc: 'Мы тщательно отбираем свежие фрукты и овощи у надежных поставщиков, чтобы убедиться, что каждая посылка, доставленная к вам, соответствует нашим высоким стандартам качества.',
          img: require('~/assets/images/qual.jpg')
        },
        {
          title: 'Быстрая и удобная доставка',
          desc: 'Мы стараемся организовать  быструю и надежную доставку прямо к вашей двери. Независимо от вашего местоположения, вы можете быть уверены, что ваши продукты будут доставлены вовремя.',
          img: require('~/assets/images/del.jpg')
        },
        {
          title: 'Широкий ассортимент',
          desc: 'Мы предлагаем широкий выбор фруктов и овощей, чтобы удовлетворить любой вкус и предпочтение. От классических и сезонных продуктов до экзотических фруктов и овощей - у нас есть все, что вам нужно',
          img: require('~/assets/images/assort.jpg')
        },

      ],
      bannerTitle: 'Свяжитесь с нами',
      bannerDesc: 'Свяжитесь с нами и мы расскажем, как вам оформить заказ и ответим на все ваши вопросы',
      bannerImg: require('~/assets/images/banner.png'),
      img: require('~/assets/images/hero-fruits.jpg'),
      showPopup: false
        }
      },
      {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
  {
                "@type": "ListItem",
                "position": 1,
                "name": "О Нас",
                "url": "https://fruit-atlas.ru/about"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Фрукты",
                "url": "https://fruit-atlas.ru/categories/fruits"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Овощи",
                "url": "https://fruit-atlas.ru/categories/vegetables"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Экзотические фрукты",
                "url": "https://fruit-atlas.ru/categories/vegetables"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Контакты",
                "url": "https://fruit-atlas.ru/contacts"
              },
              {
                "@type": "ListItem",
                "position":6,
                "name": "Доставка",
                "url": "https://fruit-atlas.ru/delivery"
              }
  ]
}
      ]
    }
  },
  async fetch ({ store }) {
      await store.dispatch('getFruitsHits')
      await store.dispatch('getVegetablesHits')
      await store.dispatch('getArticles')
  },
  created() {
    this.$nuxt.$on('showPopup', ($event) => this.show($event))
  },
  computed: {
    fruitsHits() {
      return this.$store.state.fruitsHits
    },
    vegetablesHits() {
      return this.$store.state.vegetablesHits
    },
    articles() {
      return this.$store.state.articles
    },
  },
  methods: {
    addToCart(e) {
      this.$store.commit('addToCart', e)
    },
    show(e) {
      console.log(e)
      this.showPopup = e
    },
  }
}
</script>

<style lang="scss" scoped>
.main{
  position: relative;
}
.divider{
  height: 80px;
  @media(min-width: 992px){
    height: 120px;
  }

}
</style>
