<template lang="pug">
.default
    HeaderComponent(@turnMenu="turnMenu" :activeBurger="activeBurger" @turnCart="turnCart")
    //- .free-del Бесплатная доставка до 8 марта!
    .mob-menu(:class="{active: menuActive}")
        ul.parent-ul
            li.parent-li(@click="checkMenuElem(item)" v-for="item in menu") 
                nuxt-link.parent-a(:to="item.link") {{ item.title }}
                .icon(v-if="item.subitems" :class="{ turned: item.sub }")
                ul.child-ul(:class="{ active: item.sub }")
                    li(v-for="subitem in item.subitems" @click="turnMenu")
                        nuxt-link(:to="subitem.link") {{ subitem.title }}
    CartPanel(:class="{active: cartActive}" @turnCart="turnCart")
    Nuxt
    Footer
    .floating-call-btn 
      a.fl-btn(href="https://wa.me/79188208097")
        .text(v-html="btn") {{ btn }}
        .pulse
          img(src="~/assets/images/fl-wts.svg")
</template>
<script>
export default{
    data() {
        return {
            btn: `Ответим <br> в течении 2 минут`,
            menu: [
              {
                title: 'Главная',
                link: '/',
              },
              {
                title: 'Каталог',
                link: '#',
                sub: false,
                subitems: [
                  {
                    title: 'Фрукты',
                    link: '/categories/fruits'
                  },
                  {
                    title: 'Экзотика',
                    link: '/categories/exotics'
                  },
                  {
                    title: 'Овощи',
                    link: '/categories/vegetables'
                  },
                  {
                    title: 'Ягоды',
                    link: '/categories/berries'
                  },
                  {
                    title: 'Зелень',
                    link: '/categories/green'
                  },
                ],
              },
              {
                title: 'О Компании',
                link: '/about'
              },
              {
                title: 'Доставка',
                link: '/delivery'
              },
              {
                title: 'Контакты',
                link: '/contacts'
              },
            ],
            cartActive: false,
            activeBurger: false,
            menuActive: false,
        }
    },
    mounted() {
      // this.$store.commit('setCart',)
    },
    methods: {
        turnMenu() {
            this.menuActive = !this.menuActive;
            this.activeBurger = !this.activeBurger;
            if (this.cartActive) {
                this.cartActive = false;
                this.fixBody()
            }
        },
        checkMenuElem(item){
            if(item.subitems){
            item.sub = !item.sub
            }else{
            location.href = item.link;
            this.turnMenu()
            }
        },
        turnCart() {
            this.cartActive = !this.cartActive;
            if (this.menuActive && this.activeBurger) {
                this.menuActive = false;
                this.activeBurger = false;
            }
        },
    },
}
</script>
    
<style lang="scss" scoped>
      .default{
        position: relative;
        .mob-menu{
          position: fixed;
          width: 100%;
          height: 100%;
          left: -100%;
          transition: all .5s ease;
          box-sizing: border-box;
          overflow-y: scroll;
          z-index: 20;
          top: 75px;
          background: #fff;
          box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          padding-bottom: 20px;
          @media(min-width: 992px){
            display: none;
          }
          &.active{
            left: 0;
          }
          .parent-ul{
            padding: 16px;
            .parent-li{
              font-size: 18px;
              padding: 10px;
              border-bottom: 1px solid rgb(205, 205, 205);
              position: relative;
              .parent-a{
                font-weight: 500;
                text-transform: uppercase;
                color: #666A86
              }
              .icon{
                position: absolute;
                top: 20px;
                width: 10px;
                height: 10px;
                background-size: contain;
                right: 10px;
                background-repeat: no-repeat;
                background-image: url(~/assets/images/next.svg);
                transition: all .3s linear;
                transform: rotate(90deg);
                &.turned{
                  transform: rotate(-90deg);
                }
              }
            }
          }
          .child-ul{
            transition: all .5s ease;
            transform: translateY(-22px);
            overflow: hidden;
            pointer-events: none;
            opacity: 0;
            max-height: 0;
            li{
                padding: 10px 20px;
                a{
                  color: #666A86
                }
              }
            &.active{
              margin-top: 10px;
              overflow: hidden;
              transform: translateY(0);
              pointer-events: all;
              opacity: 1;
              max-height: 300px;
            }
          }
          .socials{
            width: 130px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          }
        }
        .free-del{
          background: #8ed081;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: "EuclidMd";
          @media(min-width: 1200px){
            font-size: 18px;
          }
        }
        .floating-call-btn{
          position: fixed;
          bottom: 5%;
          right: 20px;
          z-index: 100;
          .fl-btn{
            display: flex;
            .text{
              position: relative;
              background: #e5e5e5;
              font-size: 12px;
              padding: 10px;
              width: fit-content;
              color: #000;
              margin-right: 13px;
              display: flex;
              align-items: center;
              width: 130px;
              border-radius: 5px;
              &:before{
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                border: solid transparent;
                border-width: 10px;
                top: 50%;
                right: -20px;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                border-left-color: #e5e5e5;
                border-width: 8px;
                right: -16px;
                left: auto;
                border-left-color: #e5e5e5;
                border-right-color: transparent;
              }
            }
          }
          .pulse {
            width: 55px;
            height: 55px;
            border-radius: 50px;
            background: #fbb32f;
            animation: pulse 1500ms infinite;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 #0f8411;
          }
          100% {
            box-shadow: 0 0 0 17px #fbb32f01;
          }
        }
        }

      }
    </style>