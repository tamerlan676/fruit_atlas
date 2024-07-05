<template lang="pug">
.footer
    .footer-wrapper 
        .list-block
            h4 Каталог
            ul
                li(v-for="item in menu_1")
                    a(:href="item.href") {{ item.title }}
        .list-block
            h4 Услуги
            ul
                li(v-for="item in menu_2")
                    a(:href="item.href") {{ item.title }}
        .list-block
            h4 О компании
            ul
                li(v-for="item in menu_3")
                    a(:href="item.href") {{ item.title }}
        .list-block
            h4  Полезное
            ul
                li(v-for="item in menu_4")
                    a(:href="item.href") {{ item.title }}


    .socials
        a(href="https://vk.com/fruitatlas" target="_blank")
            img(style="height: 50px;" src="~/assets/images/vk.svg")
        a(href="https://t.me/tameshka" target="_blank")
            img(style="height: 50px;" src="~/assets/images/tlg.svg")
        a(href="https://wa.me/79188208097" target="_blank")
            img(style="height: 50px;" src="~/assets/images/wts.svg")
    .copyright © 2024. Все права защищены
</template>

<script>
export default{
    name: 'FooterComp',
    data () {
        return {
            menu_1: [
                {
                    title: 'Фрукты',
                    href: '/categories/fruits/'
                },
                {
                    title: 'Экзотические фрукты',
                    href: '/categories/exotics/'
                },
                {
                    title: 'Ягоды',
                    href: '/categories/berries/'
                },
                {
                    title: 'Овощи',
                    href: '/categories/vegetables/'
                },
                {
                    title: 'Зелень',
                    href: '/categories/green/'
                },
            ],
            menu_2: [
                {
                    title: 'Доставка фруктов в офисы',
                    href: '/uslugi/dostavka-fruktov-v-ofisi/'
                },
                {
                    title: 'Доставка фруктов и овощей с рынка Фуд Сити',
                    href: '/uslugi/dostavka-fruktov-v-ofisi/'
                },
                {
                    title: 'Доставка фруктов в кафе и рестораны',
                    href: '/uslugi/dostavka-fruktov-v-kafe/'
                },
                {
                    title: 'Доставка фруктов и овощей в магазины',
                    href: '/uslugi/dostavka-fruktov-v-magazini/'
                },

            ],
            menu_3: [
                {
                    title: 'О комапнии',
                    href: '/about/'
                },
                {
                    title: 'Доставка',
                    href: '/delivery/'
                },
                {
                    title: 'Акции',
                    href: '/bonuses/'
                },
                {
                    title: 'Контакты',
                    href: '/contacts/'
                },
            ],
            menu_4: [
                {
                    title: 'Правильное хранение фруктов',
                    href: '/articles/310'
                },
                {
                    title: 'Фрукты с рынка',
                    href: '/articles/304'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    padding: 40px 24px;
    background: rgb(229, 229, 229);
    @media(min-width: 992px){
        padding: 80px 40px;
    }
    @media(min-width: 1200px){
        padding: 120px 0;
    }
    .footer-wrapper{
        margin-bottom: 80px;
        @media(min-width: 768px){
            display: flex;
            justify-content: space-between;
        }
        @media(min-width: 1100px){
            margin: 0 auto 80px;
            width: 1120px;
        }
    }
    .list-block{
        margin-bottom: 24px;
        h4{
            margin-bottom: 16px;
            font-size: 18px;
        }
        ul{
            li{
                margin-bottom: 8px;
            }
            a{
                color: grey;
                &:hover{
                color: black
                }
            }
        }
    }
    .socials{
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        a{
            margin-right: 20px;
            &:last-child{
                margin-right: 0;
            }
        }
    }
    .copyright{
        margin: 0 auto;
        width: fit-content; 
    }
   
}
</style>
