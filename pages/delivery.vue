<template lang="pug">
.content
    .deli-banner 
        .banner-wrapper 
            .info 
                h1 Надежная доставка фруктов и овощей
                p Выберем самое лучшее и доставим прямо к вашему порогу
            .image
                img(src="~/assets/images/del-banner.png" alt="Надежная доставка fruit atlas")
    .deli-benefits 
        .benefits-wrapper
            .benefit(v-for="item in benefits" ) 
                h3  {{ item.title }}
                p  {{ item.text }}  
    .deli-cards 
        .card(v-for="card in cards")
            h3 {{ card.title }}
            p(v-html="card.text") {{ card.text }}
</template>
    
    <script>
    export default{
        name: 'PayDelivery',
        head(){
            return {
              title: 'Доставка свежих фруктов и овощей',
              meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              hid: 'description',
              name: 'description',
              content: 'Доставка свежих фруктов на дом в Москве и Московской области. Закажите качественные ягоды в интернет-магазине «Fruit Atlas».'
            }
          ],

            }
        },
        data() {
            return {
              benefits: [
                {
                    title: 'Заказывайте как хотите',
                    text: 'Вы можете заказывать фрукты и овощи с нашего сайта, но если вы не нашли какой-то продукт или вам лень лазить по сайту и искать, просто свяжитесь с нами любым удобным способом'
                },
                {
                    title: 'Доставим куда надо',
                    text: 'Мы можем доставить ваш заказ по любому адресу в Москве или Области. Просто до области доставка может стоить чуть дороже. Но в любом случае цену доставки огласим заранее'
                },
                {
                    title: 'Вернем деньги',
                    text: 'Если вам не понравится что-то из наших фруктов или овощей мы не станем спорить, а просто заберем товар обратно и вернем ваши деньги'
                }      
            ],
            cards: [
                {
                    title: 'Бесплатная доставка',
                    text: 'Каждый 5 заказ мы доставляем бесплатно'
                },
                {
                    title: 'Заказ по телефону',
                    text: `Принимаем заказы с 9:00 до 20:00 по телефону или WhatsApp по номеру: <br> <a style="color: white; text-decoration: underline" href="tel:+79188208097">+7 928 820 80 97</a><br>`
                },
                {
                    title: 'Самовывоз',
                    text: `Мы все соберем и упакуем, вам останется только заехать за покупками`
                },
            ]

            }
        }
    }
    </script>
    
    <style lang="scss" scoped>
    .content{
        padding: 16px;
        min-height: 600px;
        @media(min-width: 992px){
                padding: 32px;
                width: 900px;
                margin: 0 auto;
        }
        .text{
            white-space: pre-line;
            @media(min-width: 992px){
                font-size: 18px;
            }
            span{
            font-family: "EuclidBold";
        }
        }
        .deli-banner{
            border-radius: 10px;
            color: #fff;
            overflow: hidden;
            margin-bottom: 40px;
            .banner-wrapper{
                @media(min-width: 768px){
                    display: flex;
                }
            }
            .info{
                padding: 16px;
                background-color: #44d175;
                @media(min-width: 768px){
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 300px;
                }
            }
            h2{
                margin-bottom: 10px; 
                text-transform: uppercase;
                font-family: "EuclidBold";
            }
            .image{
                background: #ff4f61;
                img{
                    max-width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 0 0 10px 10px;
                    @media(min-width: 768px){
                        border-radius: 0 10px 10px 0;
                    }
                }
            }
        }
        .deli-benefits{
            .benefits-wrapper{
                display: flex;
                flex-direction: column;
                @media(min-width: 768px){
                    flex-direction: row;
                    justify-content: space-between;
                }
                .benefit{
                    margin-bottom: 24px;
                    h3{
                        color: green;
                        margin-bottom: 8px;
                        font-size: 20px;
                        text-transform: uppercase;
                    }
                    p{
                        font-size: 13px;
                    }
                    @media(min-width: 768px){
                        width: 30%;
                    }
                    &:nth-child(2){
                        h3{
                            color: rgb(30, 164, 213)
                        }
                    }
                    &:nth-child(3){
                        h3{
                            color: orange
                        }
                    }
                }
            }
        }
        .deli-cards{
            color: #fff;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .card{
                margin-bottom: 20px;
                background: #80C1FF;
                padding: 20px;
                width: 100%;
                border-radius: 10px;
                @media(min-width: 768px){
                    width: 200px;
                }
                @media(min-width: 992px){
                    width: 250px;
                }
                a{
                    color: #fff
                }
                &:nth-child(2){
                    background: #FC9A48;
                }
                &:nth-child(3){
                    background: #b837a9;
                }
                &:nth-child(4){
                    background: #1ec879;
                }
                h3{
                    font-family: "EuclidBold";
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }
            }
        }
    }
    
    </style>