<template lang="pug">
.header
  .wrapper
    .navbar__brand(v-if="$route.path !== '/'")
      nuxt-link(to="/uslugi/dostavka-fruktov-s-fud-city/")
        .name fruit-atlas
    .navbar__brand(v-else)
      .name fruit-atlas
    .burger(@click='$emit("turnMenu")' :class="{active: activeBurger}")
      span
    .menu-lg
      ul.parent-ul
        li
          nuxt-link(to="/uslugi/dostavka-fruktov-s-fud-city/") Главная
        li
          nuxt-link(to="/about/") О Компании
        li.dropdown-item(@click="turnCatMenu()") Услуги
          ul.child-ul(:class="{active: catDroodown}")
            li
              nuxt-link(to="/uslugi/dostavka-v-ofisi/") Доставка фруктов в офисы
            li
              nuxt-link(to="/uslugi/dostavka-fruktov-s-fud-city/") Доставка фруктов и овощей с Фуд Сити
            li
              nuxt-link(to="/uslugi/dostavka-fruktov-v-kafe/") Доставка фруктов в кафе и рестораны
            li
              nuxt-link(to="/uslugi/dostavka-fruktov-v-magazini/") Доставка фруктов и овощей в магазины
        li
          nuxt-link(to="/delivery/") Доставка
        li
          nuxt-link(to="/contacts/") Контакты
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
      activeBurger: {
        type: Boolean,
        default: false
      },
  },
  data() {
    return{
      catDroodown: false,
      collectionsDropdown: false
    }
  },
  methods: {
      turnCatMenu () {
        this.catDroodown = !this.catDroodown
        if(this.collectionsDropdown){
          this.collectionsDropdown = false
        }
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

<style lang="scss" scoped>
.header{
  width: 100%;
  padding: 20px 16px;
  position: sticky;
  top: 0;
  z-index: 20;
  height: 70px;
  background: #7C4585;
  @media(min-width: 1200px){
    height: 80px;
  }
}
.wrapper{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(min-width: 992px){
    padding: 20px 32px;
  }
  @media(min-width: 1200px){
    width: 1120px;
    margin: 0 auto;
    padding: 0;
  }
  .name{
    color: #fff;
    font-size: 24px;
  }
  .burger{
    width: 30px;
    height: 25px;
    position: relative;
    @media(min-width: 992px){
      display: none;
    }
    cursor: pointer;
    &::before{
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background: #fff;
      transition: all .5s ease;
    }
    &::after{
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background: #fff;
      bottom: 0;
      transition: all .5s ease;
    }
    span{
      width: 25px;
      height: 3px;
      background: #fff;
      position: absolute;
      top: 11px;
      transition: all .5s ease;
    }
    &.active{
      span{
            display: none;
          }
        &:before{
          transform: rotate(40deg);
          bottom: 10px;
          background:#fff;
        }
        &:after{
          transform: rotate(-40deg);
          top: 12px;
          background:#fff;
        }
    }
    }
  .menu-lg{
    display: none;
    @media(min-width: 992px){
      display: block;
      margin-left: 95px;
    }
    .parent-ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
      display: flex;
    }
    li {
      color: #fff;
      display: block;
      position: relative;
      transition-duration: 0.5s;
      padding: 10px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .1rem;
      font-weight: bold;
      a {
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: .1rem;
        font-weight: bold;
        transition: all .5s ease;
        &:hover{
          color: #fff
        }
      }
      &:hover{
        background: #A2999E;
        color: #fff;
	      cursor: pointer;
      }
    }
    .child-ul {
      background: #A2999E;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: all 1s ease;
      pointer-events: none;
      left: 0;
      width: 200px;
      padding: 10px;
      transform: matrix(1, 0, 0, 1, 3, -20);
      a{
        width: 100%;
        display: block;
        color: #fff;
        transition: all .5s ease;
        &:hover{
          color: brown;
        }
      }
    }
    ul li:hover > ul,
    ul li ul:hover {
      visibility: visible;
      pointer-events: all;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 10);
    }
  }
  .mob-sm{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .phone{
        display: none;
      @media(min-width: 992px){
        display: block;
      }
      margin-right: 50px;
      a{
        color: #2DBE64;
        font-family: "EuclidMd";
      }
    }
    .cart{
      position: relative;
      cursor: pointer;
      .count{
        position: absolute;
        width: 12px;
        height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #F6D1AD;
        padding: 10px;
        font-size: 12px;
        font-weight: 500;
        top: 0;
        right: -10px;
      }
    }
  }
}
</style>
