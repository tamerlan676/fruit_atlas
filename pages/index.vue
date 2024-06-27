<template lang="pug">
.main 
  HeroCenter(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup")
  Categories
  Chess(:title="chessTitle" :desc="chessDesc" :chessList="chessList")
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
      heroTitle: `Доставка свежих фруктов по Москве`,
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
  async fetch ({ store }) {
      // await store.dispatch('getFruitsHits')
      await store.dispatch('getArticles')
  },
  created() {
    this.$nuxt.$on('showPopup', ($event) => this.show($event))
  },
  computed: {
    fruitsHits() {
      return this.$store.state.fruitsHits
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
