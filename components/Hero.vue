<template lang="pug">
.hero
    .wrapper
        .left
            h1 {{ title }}
            p.md {{ desc }}
            .buttons.md
                nuxt-link.orange-btn(:to="{ path: '/', hash:'#categories'}") Хочу попробовать
        .right
            img(src="~/assets/images/hero.jpg")
            p.xs Закажите фрукты или овощи которые порадуют вас вкусом и качеством
    .buttons.xs
        nuxt-link.orange-btn(:to="{ path: '/', hash:'#categories'}") Хочу попробовать
    .arrow
        //- img(src="~/assets/images/arrow.svg")
    </template>
        
        <script>
        export default {
          name: 'HeroBlock',
          props: {
              activeBurger: {
                type: Boolean,
                default: false
              },
              title: String,
              desc: String
          },
          data() {
            return{
              catDroodown: false,
              collectionsDropdown: false,          
            }
          },
          methods: {
              turnCatMenu () {
                this.catDroodown = !this.catDroodown
                if(this.collectionsDropdown){
                  this.collectionsDropdown = false
                }
              },
              showPopup() {
                this.$emit('show-popup')
              }
          },
          computed: {
                  cart() {
                    return this.$store.state.cart
                  },
                  totalProducts() {
                    return this.$store.state.totalProducts
                  },
                },
        }
        </script>
        
        <style scoped lang="scss">
        .hero{
          z-index: 2;
          position: relative;
          @media(min-width: 992px){
            height: calc(100vh - 80px);
          }
          .wrapper{
              padding: 24px 24px 24px;
               @media(min-width: 992px){
                  display: flex;
                  width: 1120px;
                  padding: 60px 0;
                  margin: 0 auto;
                  align-items: center;
            }
            .right{
              position: relative;
              .heart{
                position: absolute;
                left: 50px;
                font-size: 40px;
                top:72px;
                animation: pulseEffect 2s infinite;
                animation-delay: 1s;
                opacity: 0.7;
                @media(min-width: 992px){
                  left: 100px;
                }
              }
              .happy{
                position: absolute;
                top: 20px;
                right: 200px;
                font-size: 40px;
                animation: pulseEffect 2s infinite;
                animation-delay: 1.7s;
                opacity: 0.7;
                @media(min-width: 1200px){
                  left: 200px;
                  right: 300px
                }
              }
              .fire{
                position: absolute;
                top: 18px;
                right: 120px;
                font-size: 40px;
                animation: pulseEffect 2s infinite;
                animation-delay: 2s;
                opacity: 0.7;
                @media(min-width: 992px){
                  right: 176px;
                  top: 25px;
                }
              }
              .gift{
                position: absolute;
                top: 60px;
                font-size: 40px;
                right: 50px;
                animation: pulseEffect 2s infinite;
                animation-delay: 2.3s;
                opacity: 0.7;
                @media(min-width: 992px){
                  right: 80px;
                }
              }
    
              @keyframes pulseEffect {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.2);
                }
                100% {
                  transform: scale(1);
                }
              }
            }
          }
          h1{
            color: #000;
            font-size: 32px;
            line-height: 40px;
            @media(min-width: 1200px){
              font-size: 35px;
              margin-bottom: 16px;
            }
          }
          img{
            max-width: 100%;
          }
          .md{
            margin-bottom: 16px;
            font-size: 16px;
            display: none;
            @media(min-width: 990px){
              display: block;
            }
          }
          .xs{
              display: block;
            @media(min-width: 990px){
              display: none;
              align-items: center;
              justify-content: center;
            }
          }
          .buttons{
            position: relative;
            width: 100%;
            &.xs{
              display: block;
              padding: 0 24px;
              @media(min-width: 992px){
                display: none;
              }
            }
            &.md{
              display: none;
              @media(min-width: 992px){
                display: flex;
                a{
                  margin-right: 16px;
                }
              }
            }
            .arrow{
                position: absolute;
                right: 10px;
                top: 10px;
                transform: rotate(120deg);
                animation: 1s infinite alternate down;
                img{
                  width: 50px;
                  opacity: 0.8;
                }
              }
              a{
                width: 250px;
              }
              @keyframes down {
                from{
                  top: 10px
                }
                to{
                  top: 30px
                }
              }
          }
        }
        </style>