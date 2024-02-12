<template lang="pug">
.main 
  HeroCenter(title="Доставка фруктов и овощей в Москве и Московской области" desc="Мы доставляем только самые свежие фрукты и овощи прямо к вашему порогу" :img="img")
  Categories#categories
  AboutMini
  Scheme
  h2.hit-title Сезонные фрукты
  Hits(:hits="fruitsHits" category="fruits")
  .all-links 
    nuxt-link(to="categories/fruits") Смотреть все фрукты >
  Reviews
  Questions
  BannerBonus
  Articles(:articles="articles")
</template>

<script>
export default{
  data() {
    return {
      img: require('~/assets/images/hero.jpg'),
    }
  },
  async fetch ({ store }) {
      await store.dispatch('getFruitsHits')
      await store.dispatch('getArticles')
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
  }
}
</script>

<style lang="scss" scoped>
.hit-title{
  padding-left: 16px;
  margin-bottom: 20px;
  @media(min-width: 992px){
    margin-bottom: 40px;
    text-align: center;
    font-size: 28px;
  }
}

.all-links{
    padding: 0 16px;
    margin-bottom: 20px;
    @media(min-width: 768px){
      margin: 0 auto 24px;
      width: fit-content;
    }
    @media(min-width: 992px){
      margin-bottom: 40px;
    }
    @media(min-width: 1200px){
      margin-bottom: 80px;
    }
    a{
      color: #8ed081
    }
  }
</style>
