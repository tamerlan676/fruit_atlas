<template lang="pug">
.main 
  HeroCenter(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup")
  Scheme
  Categories
  Reviews
  Hits(:hits="fruitsHits" category="fruits" title="Сезонные фрукты" link="https://fruit-atlas.ru/categories/fruits")
  Hits(:hits="vegetablesHits" category="vegetables" title="Сезонные овощи" link="https://fruit-atlas.ru/categories/vegetables")
  .divider
  Chess(:title="chessTitle" :desc="chessDesc" :chessList="chessList")
  .divider
  Banner(:title="bannerTitle" :desc="bannerDesc" :img="bannerImg")
  Numbers
  Questions
  Articles(:articles="articles")
  Popup(:showPopup="showPopup" @showPopup="showPopup")
</template>

<script>
export default{
  data() {
    return {
      heroTitle: `Доставка фруктов и овощей по Москве`,
      heroDesc: `Прямо с рынка к вам домой – без посредников и лишних накруток<br>Свяжитесь с нами и мы раскажем вам все подробности`,
      chessTitle: 'Преимущества при работе с нами',
      chessDesc: 'Мы стремимся работать так, чтобы к нам возвращались снова и снова',
      chessList: [
        {
          title: 'Свежие продукты – отбор лучших товаров с рынка',
          desc: 'Мы тщательно отбираем свежие фрукты и овощи у надежных поставщиков, чтобы убедиться, что каждая посылка, доставленная к вам, соответствует нашим высоким стандартам качества.',
          img: require('~/assets/images/qual.jpg')
        },
        {
          title: 'Удобная доставка – от рынка прямо к вам домой',
          desc: 'Мы стараемся организовать  быструю и надежную доставку прямо к вашей двери. Независимо от вашего местоположения, вы можете быть уверены, что ваши продукты будут доставлены вовремя.',
          img: require('~/assets/images/del.jpg')
        },
        {
          title: 'Оптовые и розничные заказы – для семей и бизнеса',
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
      head: {
        link: [
          {
            rel: 'canonical',
            href: 'https://fruit-atlas.ru'
          }
        ]
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
