<template lang="pug">
.products-wrapper 
    .product(v-for="(item, key) in products" :key="key")
        nuxt-link.img-block(:to="`/${folder}/${category}/${item.id}`")
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
                  .price
                      span {{ item.acf.quantity }}{{ item.acf.unit }}. 
                      br
                      span.price-info Актуальную цену предоставит менеджер
              .add-cart(@click="addToCart(item)"  :class="{'added-to-cart': cart.find(i => i.id == item.id)}") 
                span(v-if="cart.find(i => i.id == item.id)") добавлено
                span(v-else) в корзину
</template>
    
<script>
  export default{
    name: 'ProductsWrapper',
    props: {
      products: Array,
      folder: String, // Переменная папки. Либо категории (categories) 
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
        },
  }
</script>
    
    <style lang="scss" scoped>
    .products-wrapper{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      @media(min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media(min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
        width: 1120px;
        margin: 0 auto 80px;
      }
      .product{
        border: 1px solid rgb(241, 241, 241);
        position: relative;
        transition: all .5s ease;
        overflow: hidden;
        border-radius: 16px;
        position: relative;
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
              margin-bottom: 16px;
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
                  font-size: 10px;
                  @media(min-width: 768px){
                    width: 130px;
                  }
                }
              }
            }
            .add-cart{
                background: #8ed081;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                width: 100%;
                height: 40px;
                color: #fff;
                text-transform: uppercase;
              }
              .added-to-cart{
                background: rgb(112, 144, 111);
              }
          }
          &:hover{
            .img{
              transform: scale(1.1);
            }
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