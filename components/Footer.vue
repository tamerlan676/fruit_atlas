<template lang="pug">
.footer
    .footer-wrapper 
        .logo 
            .name fruit-atlas
        nav.menu
            ul
                li(v-for="item in menu")
                    nuxt-link(:to="item.link") {{ item.title }}
        .socials
            a(href="https://vk.com/fruitatlas" target="_blank")
                img(style="height: 50px;" src="~/assets/images/vk.svg")
            a(href="https://t.me/tameshka" target="_blank")
                img(style="height: 50px;" src="~/assets/images/tlg.svg")
            a(href="https://wa.me/79188208097" target="_blank")
                img(style="height: 50px;" src="~/assets/images/wts.svg")
        .copyright © 2023. Все права защищены
</template>

<script>
export default{
    name: 'FooterComp',
    data () {
        return {
            menu: [
                {
                    title: 'О Компании',
                    link: '/about'
                },
                {
                    title: 'Доставка',
                    link: '/delivery'
                },
                {
                    title: 'Новости компании',
                    link: '/news'
                },
                {
                    title: 'Контакты',
                    link: '/contacts'
                },
            ],
            categories: [
                {
                    title: 'Фрукты',
                    link: '/categories/fruits'
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
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    border-top: 1px solid #e5e5e5;
    width: 100%;
    padding: 40px 16px;
    box-sizing: border-box;
    background: #e5e5e5;
    .footer-wrapper{
        .logo{
            text-align: center;
            font-family: "EuclidMd";
            color: #666A86;
            margin-bottom: 40px;
            font-size: 24px;
        }
        .menu{
            text-align: center;
            margin-bottom: 40px;
            ul{
                display: none;
                @media(min-width: 992px){
                display: flex;
                width: 600px;
                margin: 0 auto;
                justify-content: space-between;
            }
            }
            li{
                margin-bottom: 20px;
                @media(min-width: 992px){
                    margin-bottom: 0;
                }
            }
            a{
                color: #666A86;
            }
        }
        .socials{
            display: flex;
            justify-content: space-between;
            width: 250px;
            margin: 0 auto 40px;
        }
        .copyright{
            text-align: center;
        }
    }
   
}
</style>
