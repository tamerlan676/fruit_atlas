<template lang="pug">
.hero
    .wrapper
        .left
            .avito 
              a(target="_blank" href="https://www.avito.ru/moskva/produkty_pitaniya/dostavka_ovoschey_i_fruktov_s_fud_siti_3382360582#open-reviews-list")
                img(src="~/assets/images/avito.svg")
            h1(v-html="title") 
            p.md(v-html="desc")
            a.btn(href="https://wa.me/79188208097")
              span Написать сборщику
              img(src="~/assets/images/wts-white.svg") 
            .benefits 
              .benefit(v-for="benefit in benefits" :key="benefit") 
                img(src="~/assets/images/gr-done.svg")
                .txt {{ benefit }}
        .right
            img(src="~/assets/images/hero.webp")
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
              desc: String,
              benefits: Array
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
          background: #7C4585;
          @media(min-width: 992px){
          }
          .wrapper{
              padding: 60px 24px 0;
               @media(min-width: 992px){
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  margin: 0 auto;
                  padding: 80px 24px 0;
                @media(min-width: 1200px){
                  width: 1120px;
                  margin: 0 auto;
                  padding: 120px 0 0;
                }
            }
            .left{
              h1{
                color: #fff;
                font-size: 24px;
                line-height: 32px;
                text-align: center;
                margin-bottom: 24px;
                white-space: pre-line;
                @media(min-width: 992px){
                  font-size: 35px;
                  margin-bottom: 16px;
                  text-align: left;
                  line-height: 50px;
                }
              }
            img{
              max-width: 100%;
            }
          .md{
            margin-bottom: 24px;
            font-size: 16px;
            text-align: center;
            color: #fff;
            @media(min-width: 992px){
              text-align: left;
          }
          }
          .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 40px;
            border-radius: 15px;
            height: 60px;
            width: fit-content;
            color: #fff;
            margin: 0 auto 24px;
            background: #CC66DA;
            @media(min-width: 992px){
              justify-content: start;
              margin: 0 0 24px;
            }
            @media(min-width: 1200px){
              margin-bottom: 40px;
            }
            span{
              margin-right: 8px;
            }
          }

            }
            .right{
              position: relative;
              img{
                max-width: 100%;
                margin-bottom: -4px;
              }
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
          .avito{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            @media(min-width: 992px){
              justify-content: start;
            }
            
            img{
              width: 100px;
            }
          }

          .benefits{
            display: grid;
            grid-gap: 5px;
            width: fit-content;
            margin: 0 auto 24px;
            @media(min-width: 768px){
              grid-gap: 16px;
              grid-template-columns: 1fr 1fr;
              margin: 0 auto 40px;
            }
            @media(min-width: 992px){
              margin: 0;
            }
            .benefit{
              display: flex;
              align-items: center;
              font-size: 14px;
              color: #fff;
              img{
                margin-right: 8px;
              }
            }
          }
        }
        </style>