<template lang="pug">
section.reviews
    h2.section-title(v-html="title") {{ title }}
    .reviews-wrapper
        .review(v-for="(review, i) in reviews" :key="i")
            .header 
                .name {{ review.name }}
            .main
                img.circle(:src="review.img" @click="index = i")
                p.text {{ review.text }}
    a.real-review(href="https://www.avito.ru/moskva/produkty_pitaniya/dostavka_ovoschey_i_fruktov_s_fud_siti_3382360582#open-reviews-list" target="_blank") Убедиться в реальности отзывов
    </template>
    
    <script>
    export default {
        name: 'ReviewsComp',
      data() {
        return {
            title: `Уже 500+ заказов доставлено:`,
          reviews: [ 
            {
                img: require("~/assets/images/persons/1.jpg"),
                source: 'WhatsApp',
                name: 'Наталья',
                text: 'Захотелось поесть вкусных фруктов, так как рядом с моим домом только Пятерочка, а фрукты там так себе бывают. Нашла ребят из frut-atlas  в интернете. Осталась полностью довольна своим заказом.'
            },  
            {
                img: require("~/assets/images/persons/2.jpg"),
                source: 'WhatsApp',
                name: 'Мира',
                text: 'Доброе утро! Да,курьер привез фрукты в оговоренное время. Сами фрукты сочные и вкусные. Спасибо вам'
            },  
            {
                img: require("~/assets/images/persons/4.jpg"),
                source: 'WhatsApp',
                name: 'Элина',
                text: 'У нас большая семья и приходится покупать много фруктов. Удобная схема, я скидываю в уотсап то, что нужно, мне собирают заказ и перед отправкой фоткают. Привозят относительно быстро. В целом мы довольны'
            },  
            {
                img: require("~/assets/images/persons/3.jpg"),
                source: 'WhatsApp',
                name: 'Максим',
                text: 'Заказываем фрукты в офис. Всегда привозят хорошие фрукты. Мне нравится что если товар плохой, то нам звонят и говорят, что к примеру груш сегодня хороших нет, а не пихают лишь бы заработать.'
            }, 
            {
                img: require("~/assets/images/persons/5.jpg"),
                source: 'WhatsApp',
                name: 'Ирина',
                text: 'Покупаем в этой лавке фрукты уже давно. Но не всегда есть время поехать на Фуд Сити, поэтому доставка спасает. Ребята молодцы, заказы собирают тщательно.'
            },   
            {
                img: require("~/assets/images/persons/6.jpg"),
                source: 'WhatsApp',
                name: 'Кристина',
                text: 'Заказала во fruit-atlas собрать корзину из разного вида манго. Мне его даже красиво упаковали в подарочную корзинку с бантиком. Сам манго был тоже очень вкусный.'
            }, 
          ],
          index: null,
        }
      }
    }
    </script>
    
    <style lang="scss" scoped>
    .reviews{
        padding: 40px 24px;
        @media(min-width: 1200px){
            width: 1120px;
            padding: 80px 0;
            margin: 0 auto;
        }
        p{
            margin-bottom: 40px;
        }
        .reviews-wrapper{
            @media(min-width: 992px){
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px;
                margin-bottom: 40px;
            }
            @media(min-width: 1200px){
                width: 1120px;
                margin: 0 auto 40px;
            }
            .review{
                background: #F5F5F5;
                border-radius: 15px;
                padding: 16px;
                margin-bottom: 20px;
                @media(min-width: 992px){
                    margin-bottom: 0;
                }
                .header{
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 16px;
                    .name{
                        margin-right: 24px;
                    }
                }
                .main{
                    display: flex;
                    .circle{
                        width: 60px;
                        height: 60px;
                        border-radius: 100%;
                        margin-right: 20px;
                        cursor: pointer
                    }
                }
            }
        }
        .real-review{
                width: fit-content;
                padding: 20px;
                height: 60px;
                border-radius: 10px;
                text-align: center;
                margin: 0 auto;
                color: #fff;
                background: #8ed081;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                font-weight: 600;
                justify-content: center;
            }
        .transp-btn{
            border: 1px solid #000;
            color: #000;
            @media(min-width: 992px){
                width: 300px;
                margin: 0 auto;
            }
        }
    }
    </style>