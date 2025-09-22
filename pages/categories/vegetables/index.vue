<template lang="pug">
.category
    Breadcrumbs(:razdel="razdel" currentPage="Овощи")
    .category-info
        h1.title Заказывайте овощи с быстрой и удобной доставкой на дом 
    .category-flex
        ProductsWrapper(:products="vegetables" folder="categories" category="vegetables")
    Banner(:title="bannerTitle" :desc="bannerDesc" :img="bannerImg")
    Numbers
    Popup(:showPopup="showPopup" @showPopup="showPopup")
      </template>
        
<script>
  export default{
    name: 'SlugCategory',
    data() {
      return {
        razdel: {
            title: 'Каталог',
            link: '/katalog/'
          },
        bannerTitle: 'Не нашли что искали?',
        bannerDesc: 'Свяжитесь с нами и мы предоставим ифнормацию о продукте, который вас интересует',
        bannerImg: require('~/assets/images/banner.png'),
        showPopup: false,
        chessTitle: 'Преимущества при работе с нами',
        chessDesc: 'Мы стремимся работать так, чтобы к нам возвращались снова и снова',
      }
    },
    async fetch ({ store }) {
      await store.dispatch('getVegetables')
    },
    head(){
      return {
        title: '🍅 Доставка овощей по Москве',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'Заказывайте овощи в нашем интернет магазине. Мы обеспечим быструю и удобную доставку. Возим только качественный овощи'
          }
        ],
      }
    },
    created() {
      this.$nuxt.$on('showPopup', ($event) => this.show($event))
    },
    computed: {
      vegetables() {
        return this.$store.state.vegetables
      },
      cart() {
      return this.$store.state.cart
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
      .category{
        padding: 40px 0;
        h1{
          font-size: 24px;
          margin-bottom: 32px;
        }
        .divider{
          height: 80px;
        }
        .category-flex{
          display: flex;
          padding: 0 16px;
          margin-bottom: 40px;
          @media(min-width: 1200px){
            padding: 0
          }
        }
        .materials{
          width: fit-content;
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          padding-left: 16px;
          @media(min-width: 1200px){
            padding-left: 30px;
          }
          button{
            background: #e5e5e5;
            text-transform: uppercase;
            font-weight: 500;
            padding: 10px;
            border-radius: 5px;
            margin-right: 10px;
            transition: all .5s ease;
            &.active{
              background: #000;
              color: #fff
            }
            &:last-child{
              margin-right: 0;
            }
          }
        }
        .category-info{
          padding:16px;
          white-space: pre-line;
          line-height: 1.5;
          @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
            padding: 0;
          }
        }
      }
      </style>