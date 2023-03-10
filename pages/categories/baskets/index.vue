<template lang="pug">
.category
    .category-info
        h1.title Фруктовые корзины с доставкой по Москве
        .category-desc(v-html="desc") {{ desc }} 
    .category-flex
        ProductsWrapper(:products="baskets" folder="categories" category="baskets")
    .custom-basket 
      .custom-wrapper
        h2 Мы так же можем собрать корзину по вашим пожеланиям
        p Свяжитесь с нами и расскажите из каких фруктов вы бы хотели собрать подарочную корзину.
        a(href="tel:79933645588") +7 993 364 55 88
    </template>
      
  <script>
    export default{
      name: 'SlugCategory',
      data() {
        return {
          desc: `Наша комапния Fruit Atlas предлагает выбрать и купить фруктовую корзину на Ваш выбор. В случае необходимости мы в состоянии оперативно осуществить доставку выбранной корзины с фруктами в пределах МКАД <span style="font-family: 'EuclidBold'">в течении 2-3 часов</span> с момента заказа. <br> Все фрукты, ягоды и прочие составляющие корзин являются абсолютно свежими, ведь качество для нас превыше всего!`
        }
      },
      async fetch ({ store }) {
        await store.dispatch('getBaskets')
      },
      head(){
        return {
          title: 'Фруктовые корзины на любой вкус | Доставка по всей Москве',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              hid: 'description',
              name: 'description',
              content: 'У нас вы найдете широкий выбор фруктовых корзин на любой вкус и кошелек. Мы доставим ваш заказ прямо к вашей двери в любую точку Москвы'
            }
          ],
        }
      },
      computed: {
        baskets() {
          return this.$store.state.baskets
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
      .custom-basket{
        padding: 16px;
        .custom-wrapper{
          background: linear-gradient(0deg, rgba(172,47,156,0.7511598389355743) 0%, rgba(117,12,112,0.8856136204481793) 0%);
          padding: 16px;
          color: #fff;
          text-align: center;
          border-radius: 10px;
          @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
            padding: 32px 0;
          }
          h2{
            margin-bottom: 16px;
            @media(min-width: 1200px){
              width: 500px;
              margin: 0 auto 24px;
            }
          }
          p{
            margin-bottom: 16px;
            @media(min-width: 1200px){
              width: 600px;
              margin: 0 auto 24px;
            }
          }
          a{
            font-size: 25px;
            font-family: "EuclidBold";
            color: #fff;
            text-decoration: underline;
          }
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
        .category-desc{
          margin-bottom: 32px;
        }
      }
    }
    </style>