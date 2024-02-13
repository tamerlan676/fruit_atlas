<template lang="pug">
.category
    .category-info
        h1.title Заказывайте зелень с быстрой и удобной доставкой на дом 
    .category-flex
        ProductsWrapper(:products="green" folder="categories" category="green")
    Chess(:title="chessTitle" :desc="chessDesc" :chessList="chessList")
    .divider
    Banner(:title="bannerTitle" :desc="bannerDesc" :img="bannerImg")
    Numbers
    Popup(:showPopup="showPopup" @showPopup="showPopup")
      </template>
            
    <script>
      export default{
        name: 'SlugCategory',
        data() {
          return {
            bannerTitle: 'Свяжитесь с нами',
            bannerDesc: 'Свяжитесь с нами и мы расскажем, как вам оформить заказ и ответим на все ваши вопросы',
            bannerImg: require('~/assets/images/banner.png'),
            showPopup: false,
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
          }
        },
        async fetch ({ store }) {
          await store.dispatch('getGreen')
        },
        head(){
          return {
            title: 'Заказать ягоды с доставкой на дом',
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              {
                hid: 'description',
                name: 'description',
                content: 'Заказывайте зелень в нашем интернет магазине. Мы обеспечим быструю и удобную доставку'
              }
            ],
          }
        },
        created() {
          this.$nuxt.$on('showPopup', ($event) => this.show($event))
        },
        computed: {
         green() {
            return this.$store.state.green
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