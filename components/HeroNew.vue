<template lang="pug">
.hero
    .wrapper
        .left
          h1 Доставка овощей и фруктов для дома и бизнеса
          p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque a nam mollitia quam, tempora perferendis accusantium explicabo sequi repellat sed accusamus voluptatem adipisci amet voluptatibus praesentium saepe libero voluptas ex!
        .right
          img(src="~/assets/images/hero-sq.jpg") 
    </template>
        
        <script>
        export default {
          name: 'HeroBlock',
          props: {
              activeBurger: {
                type: Boolean,
                default: false
              },
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
      .wrapper{
        display: flex;
        .left{
          width: 50%;
          height: calc(100vh - 20px);
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 100px;
          box-sizing: border-box;
          h1{
            margin-bottom: 24px;
          }
        }
        .right{
          width: 50%;
          height: calc(100vh - 20px);
          background: red;
          img{
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  </style>