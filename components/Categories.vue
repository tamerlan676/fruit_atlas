<template lang="pug">
.categories
  .categories-wrapper
    nuxt-link.category(v-for="(item, id) in categories" :key="id" :to="item.link")
      .category-name {{ item.title }}
      img.category-icon(:src="item.img")
</template>

<script>
export default {
  name: 'CategoriesComponent',

  data() {
    return{
      categories: [
        {
          title: 'Фрукты',
          link: '/categories/fruits',
          img: require('~/assets/images/fruits.png')
        },
        {
          title: 'Овощи',
          link: '/categories/vegetables',
          img: require('~/assets/images/vegetables.png')
        },
        {
          title: 'Зелень',
          link: '/categories/green',
          img: require('~/assets/images/green.png')
        },
        {
          title: ' Ягоды',
          link: '/categories/berries',
          img: require('~/assets/images/berries.png')
        }
      ]

    }
  },
}
</script>

<style lang="scss">
.categories{
  .categories-wrapper{
    padding: 80px 24px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(min-width: 992px){
        width: 918px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        margin: 0 auto;
        padding: 120px 0 0;
      }
      @media(min-width: 1200px){
        width: 1120px;
        grid-gap: 20px;
      }
    .category{
      width: 48%;
      padding: 8px;
      box-sizing: border-box;
      height: 150px;
      border-radius: 10px;
      margin-bottom: 15px;
      position: relative;
      overflow: hidden;
      @media(min-width: 768px){
        width: 45%;
      }
      @media(min-width: 992px){
        margin-right: 0;
        width: 220px;
        height: 200px;
      }
      @media(min-width: 1200px){
        width: 100%;
      }
      .category-name{
        font-size: 14px;
        color: #fff;
        @media(min-width: 992px){
          font-size: 18px;
        }
      }
      .category-icon{
        position: absolute;
        right: -25px;
        bottom: -20px;
        width: 130px;
        height: 130px;
        transition: all .5s ease;
        @media(min-width: 992px){
          width: 170px;
          height: 170px;
        }
      }
      &:nth-child(1){
        background:#E3745C
      }
      &:nth-child(2){
        background: #b145e7;
      }
      &:nth-child(3){
        background: #E3BD5C;
      }
      &:nth-child(4){
        background: #44d175;
      }
      &:nth-child(5){
        background: #d144a9;
      }
      &:nth-child(6){
        background: #e9ed0e;
      }
      &:nth-child(7){
        background: #b45817;
      }
      &:nth-child(8){
        background: #b4172c;
      }
      &:hover{
        .category-icon{
          @media(min-width: 992px){
          width: 180px;
          height: 180px;
        }
        }
      }
    }
}
::-webkit-scrollbar {
  display: none;
}
}
</style>
