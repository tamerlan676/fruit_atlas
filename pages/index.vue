<template lang="pug">
.main 
  Hero
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
  Hits(:products="fruits" folder="categories" category="fruits")
</template>

<script>
export default{
  data() {
    return {
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
