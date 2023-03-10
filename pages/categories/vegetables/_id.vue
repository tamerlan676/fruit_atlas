<template lang="pug">
.inner-product 
    Breadcrumbs
    .product-wrapper
        .img
            img(:src='getItem.acf.image')
        .info
            h3 {{ getItem.title.rendered }}
            p.description {{ getItem.acf.description }}
            .price-weight 
                .price {{ getItem.acf.price }} ₽
                .weight / {{ getItem.acf.quantity }} {{ getItem.acf.unit }}
            .message-about-change 
              img(src="~/assets/images/weight.svg" height="20px") 
              | Весовой товар, цена может варьироваться
            .floating-btn-lg(@click="addToCart(getItem)") 
                .text
                    img(src="~/assets/images/min-cart-btn.svg")
                    p В корзину
            .counter(v-if="counter") 
              .counter-wrapper
                .minus(@click="minusOne(getItem)") -
                .quantity {{ getItem.acf.quantity_count }}
                .plus(@click="plusOne(getItem)") +
    .floating-btn 
        .text(@click="addToCart(getItem)") 
            img(src="~/assets/images/min-cart-btn.svg")
            p В корзину
</template>
      
      <script>
      export default {
        data() {
          return {
            id: this.$route.params.id,
            addedMessage: false,
            counter: false
          }
        },
        async fetch ({ store }) {
            await store.dispatch('getVegetables')
      },
            head(){
              return {
                title: this.getItem.acf.seo_title,
                meta: [
                      { hid: 'description', 
                      name: 'description', 
                      content: this.getItem.acf.seo_desc },
                    ]
              }
        },
        computed: {
          getItem() {
            return this.$store.state.vegetables.filter(item => item.id === +this.$route.params.id)[0]
          }
        },
        methods: {
          addToCart(product) {
            this.$store.commit('addToCart', product);
            this.counter = true
          },
          plusOne(product){
            this.$store.commit('plusOne', product)
              }, 
          minusOne(product){
            this.$store.commit('minusOne', product)
              }, 
        }
      }
      </script>
      
      <style lang="scss">
      .inner-product{
        @media(min-width: 1200px){
          width: 1120px;
          margin: 40px auto 0;
        }
          .product-wrapper{
            @media(min-width: 992px){
              display: flex;
              justify-content: space-between;
              margin-bottom: 40px;  
              padding: 32px;
            }
            @media(min-width: 1200px){
              padding: 0;
            }
              .img{
                  max-width: 100%;
                  margin-bottom: 20px;
                  @media(min-width: 992px){
                    width: 600px;
                  }
                  @media(min-width: 1200px){
                      width: 530px;
                  }
                  img{
                      max-width: 100%;
                      @media(min-width: 992px){
                        border-radius: 20px;
                      }
                  }
              }
              .info{
                  padding: 0 16px;
                  margin-bottom: 20px;
                  @media(min-width: 992px){
                          width: 400px;
                      }
                  @media(min-width: 1200px){
                      width: 530px;
                  }
                  h3{
                      margin-bottom: 10px;
                  }
                  span{
                      font-family: 'EuclidBold';
                  }
                  .description{
                      color: #394141;
                      margin-bottom: 20px;
                  }
                  .price-weight{
                      display: flex;
                      align-items: center;
                      margin-bottom: 20px;
                      .price{
                          margin-right: 8px;
                          font-size: 27px;
                      }
                      .weight{
                          font-size: 18px;
                          color: #a0a6a6
                      }
                  }
                  .message-about-change{
                      margin-bottom: 20px;
                      font-size: 13px;
                      color: #a0a6a6;
                      display: flex;
                      align-items: center;
                      img{
                        margin-right: 10px;
                      }
                    }
                  .floating-btn-lg{
                      background: #8ED081;
                      height: 60px;
                      box-sizing: border-box;    
                      border-radius: 10px;
                      display: none;
                      cursor: pointer;
                      margin-bottom: 20px;
                      @media(min-width: 768px){
                        width: 300px;
                      }
                      @media(min-width: 992px){
                        display: block;
                      }
                      .text{
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 16px;
                          color: #fff;
                          height: 100%;
                      }
      
                      img{
                          margin-right: 10px;
                      }
                  }
                  .counter{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @media(min-width: 768px){
                      width: 300px;
                    }
                    .counter-wrapper{
                      display: flex;
                      width: 120px;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 18px;
                    }
                    .minus, .plus{
                      background: #8ED081;
                      border-radius: 100%;
                      font-size: 20px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      width: 40px;
                      height: 40px;
                      box-sizing: border-box;
                      cursor: pointer
                    }
                  }
              }
          }
          .product-description{
              background: #f4f4f4;
              padding: 32px 16px;
              z-index: 10;
              position: relative;
              @media(min-width: 992px){
                padding: 32px;
              }
              p{
                @media(min-width: 992px){
                  width: 800px;
                }
              }
          }
          .floating-btn{
              background: #8ED081;
              width: 95%;
              height: 60px;
              box-sizing: border-box;    
              margin: 0 auto 40px; 
              border-radius: 10px;
              @media(min-width: 768px){
                width: 300px;
                margin: 0 0 20px 16px;
              }
              @media(min-width: 992px){
                 display: none;
              }
              .text{
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                color: #fff;
                height: 100%;
                      }
                img{
                    margin-right: 10px;
                }
      }
      }
      </style>