<template lang="pug">
.main 
  HeroCenter(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup")
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
      heroTitle: `Доставка овощей по Москве`,
      heroDesc: `Предлагаем быструю и удобную доставку свежих овощей прямо к вашему порогу. <br>Свяжитесь с нами и мы раскажем вам все подробности`,
      chessTitle: 'Преимущества при работе с нами',
      chessDesc: 'Мы стремимся работать так, чтобы к нам возвращались снова и снова',
      chessList: [
        {
          title: 'Безупречное качество',
          desc: 'Мы тщательно отбираем овощи у надежных поставщиков, чтобы убедиться, что каждая посылка, доставленная к вам, соответствует нашим высоким стандартам качества.',
          img: require('~/assets/images/qual.jpg')
        },
        {
          title: 'Быстрая и удобная доставка',
          desc: 'Мы стараемся организовать  быструю и надежную доставку прямо к вашей двери. Независимо от вашего местоположения, вы можете быть уверены, что ваши продукты будут доставлены вовремя.',
          img: require('~/assets/images/del.jpg')
        },
        {
          title: 'Широкий ассортимент',
          desc: 'Мы предлагаем широкий овощей, чтобы удовлетворить любой вкус и предпочтение. У нас есть все, что вам нужно',
          img: require('~/assets/images/assort.jpg')
        },

      ],
      bannerTitle: 'Свяжитесь с нами',
      bannerDesc: 'Свяжитесь с нами и мы расскажем, как вам оформить заказ и ответим на все ваши вопросы',
      bannerImg: require('~/assets/images/banner.png'),
      img: require('~/assets/images/vegetables.jpg'),
      showPopup: false
    }
  },
  head(){
        return {
          title: 'Заказать свежие овощи с доставкой на дом',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              hid: 'description',
              name: 'description',
              content: 'Заказывайте свежие овощи в нашем интернет магазине. Мы обеспечим быструю и удобную доставку'
            }
          ],
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
