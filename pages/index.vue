<template lang="pug">
.main 
  Categories
  AboutMini
  Scheme
  h2.hit-title Сезонные фрукты
  Hits(:hits="fruitsHits" category="fruits")
  BannerBonus
  h2.hit-title Сезонные овощи
  Hits(:hits="vegetablesHits" category="vegetables")
  //- Hits(:products="fruits" folder="categories" category="fruits")
  ServiceInfo
</template>

<script>
export default{
  data() {
    return {
    }
  },
  async fetch ({ store }) {
      await store.dispatch('getFruitsHits')
      await store.dispatch('getExoticsHits')
      await store.dispatch('getVegetablesHits')
      await store.dispatch('getBerriesHits')
  },
  computed: {
    fruitsHits() {
      return this.$store.state.fruitsHits
    },
    exoticsHits() {
      return this.$store.state.exoticsHits
    },
    vegetablesHits() {
      return this.$store.state.vegetablesHits
    },
    berriesHits() {
      return this.$store.state.berriesHits
    }
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
</style>
