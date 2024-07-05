<template lang="pug">
.hits
  h2 {{ title }}
  .hits-wrapper
      .product(v-for="(item, key) in hits" :key="key")
          nuxt-link.img-block(:to="`/categories/${category}/${item.id}`")
              img.img(:src="item.acf.image" :alt="item.title.rendered")
          .editor(v-if="cart.find(i => i.id == item.id)")
            .editor-wrapper
              .minus(@click="minusOne(item)") - 
              .num {{ cart.filter(i => i.id === item.id)[0].acf.quantity_count }}
              .plus(@click="plusOne(item)") +
          .info 
              .left
                  h3 {{ item.title.rendered }}
              .right
                  .price от {{ item.acf.price }} ₽
                      span / {{ item.acf.quantity }}{{ item.acf.unit }}. 
                      br
                      span.price-info Цена может меняться в зависимости от объема
                  .add-cart(@click="addToCart(item)")
                      img(src="~/assets/images/min-cart.svg")
  .buttons
    .button
      a(:href="link") Смотреть все
</template>
<script>
    export default{
      name: 'HitsComp',
      props: {
        link: String,
        title: String,
        hits: Array,
        category: String // Название папки внутри категории или коллекции
      },
      computed: {
        cart() {
        return this.$store.state.cart
      },
      },
      methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product)
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
    
    <style lang="scss" scoped>
    .hits{
      padding: 80px 0 0;
      @media(min-width: 768px){
        padding: 120px 0 0;
      }
      h2{
        text-align: center;
        margin-bottom: 24px;
      }
    }
    .hits-wrapper{
        display: flex;
        overflow: auto;
        padding: 0 24px;
        margin-bottom: 20px;
      @media(min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media(min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
        width: 1120px;
        margin: 0 auto 40px;
      }
      .product{
        flex: 0 0 auto;
        width: 200px;
        margin-right: 10px;
        border: 1px solid rgb(241, 241, 241);
        transition: all .5s ease;
        overflow: hidden;
        border-radius: 16px;
        position: relative;
        @media(min-width: 768px){
          margin-right: 0;
          width: 100%;
        }
        .editor{
          width: 100%;
          height: 300px;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 0;
          height: 200px;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
          @media(min-width: 1200px){
            height: 300px;
          }
          .editor-wrapper{
            display: flex;
            width: 100px;
            justify-content: space-between;
            .minus, .plus, .num{
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            }
          }
          .in-cart{
            color: #fff
          }
          &.active{
            display: flex;
          }
        }
        .img-block{
            height: 200px;
            display: block;
            overflow: hidden;
            @media(min-width: 768px){
                height: 300px;
            }
        }
        .img{
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: all .5s ease;
          @media(min-width: 768px){
            height: 300px;
          }
          @media(min-width: 1200px){
            height: 300px;
          } 
        }
        .info{
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            @media(min-width: 992px){
              padding: 16px;
            } 
            h3{
              margin-bottom: 6px;
              font-size: 12px;
              @media(min-width: 768px){
                font-size: 16px;
              }
            }
            .country{
                font-size: 12px;
                color: grey;
                margin-bottom: 6px;
            }
            .desc{
              font-size: 12px;
              color: grey
            }
            .right{
              text-align: left;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .price{
                font-weight: 500;
                font-size: 16px;
                color: #499167;
                span{
                    font-size: 13px;
                    color: grey
                }
                .price-info{
                  display: block;
                  margin-top: 10px;
                  width: 130px;
                  font-size: 10px;
                }
              }
              .add-cart{
                width: 36px;
                height: 36px;
                border-radius: 100%;
                background: #8ed081;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                img{
                   height: 20px;
                }
              }
            }
          }
          &:hover{
            .img{
              transform: scale(1.1);
            }
          }
      }
      &::-webkit-scrollbar {
            display: none;
          }
    }
    .buttons{
            padding: 0 24px;
            @media(min-width: 768px){
              display: flex;
              width: fit-content;
              margin: 0 auto;
            }
            .button{
              @media(min-width: 768px){
                padding: 0 10px;
              }
            }
            a{
              display: flex;
              background: #2DBE64;
              color: #fff;
              width: 100%;
              padding: 20px;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              text-transform: uppercase;
              margin-bottom: 10px;
              @media(min-width: 768px){
                width: 250px;
                margin: 0 auto;
              }
            }
          }
    .root{
    transform: scale(0);
    opacity: 0;
    transition: all .7s ease;
    &.active{
      transform: scale(1);
      opacity: 1;
    }
  }
    </style>