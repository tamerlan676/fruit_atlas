<template lang="pug">
.category
    .category-info
        h1.title Ягоды
    .category-flex
        ProductsWrapper(:products="berries" folder="categories" category="berries")
    UnderProdcuts
    </template>
      
  <script>
    export default{
      name: 'SlugCategory',
      data() {
        return {
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getBerries')
      },
      head(){
        return {
          title: 'Доставка овощей на дом в Москве и Московской области',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              hid: 'description',
              name: 'description',
              content: 'Доставка овощей и фруктов на дом в Москве и Московской области. Закажите качественный фрукты в интернет-магазине «Fruit Atlas».'
            }
          ],
        }
      },
      computed: {
        berries() {
          return this.$store.state.berries
        },
        cart() {
        return this.$store.state.cart
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
    .category{
      padding: 40px 0;
      h1{
        font-size: 24px;
        margin-bottom: 16px;
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