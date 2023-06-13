<template lang="pug">
section.reviews
    h2.section-title(v-html="title") {{ title }}
    .reviews-wrapper
        .review(v-for="(review, i) in reviews" :key="i")
            .header 
                .name {{ review.name }}
                .source {{ review.source }} 
            .main
                img.circle(:src="review.img" @click="index = i")
                .text {{ review.text }}
    </template>
    
    <script>
    export default {
        name: 'ReviewsComp',
      data() {
        return {
            title: `Наши клиенты остаются довольными <br> Вот доказательства:`,
          reviews: [ 
            {
                img: require("~/assets/images/persons/1.jpg"),
                source: 'WhatsApp',
                name: 'Наталья',
                text: 'Доброе утро! Да, заказ был доставлен, в оговоренное время (ранний час) - что особенно важно! '
            },  
            {
                img: require("~/assets/images/persons/2.jpg"),
                source: 'WhatsApp',
                name: 'Наталья',
                text: 'Доброе утро! Да, заказ был доставлен, в оговоренное время (ранний час) - что особенно важно! '
            },  
            {
                img: require("~/assets/images/persons/3.jpg"),
                source: 'WhatsApp',
                name: 'Наталья',
                text: 'Доброе утро! Да, заказ был доставлен, в оговоренное время (ранний час) - что особенно важно! '
            },  
            {
                img: require("~/assets/images/persons/4.jpg"),
                source: 'WhatsApp',
                name: 'Наталья',
                text: 'Доброе утро! Да, заказ был доставлен, в оговоренное время (ранний час) - что особенно важно! '
            }, 
            {
                img: require("~/assets/images/persons/5.jpg"),
                source: 'WhatsApp',
                name: 'Наталья',
                text: 'Доброе утро! Да, заказ был доставлен, в оговоренное время (ранний час) - что особенно важно! '
            },   
            {
                img: require("~/assets/images/persons/6.jpg"),
                source: 'WhatsApp',
                name: 'Наталья',
                text: 'Доброе утро! Да, заказ был доставлен, в оговоренное время (ранний час) - что особенно важно! '
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
            padding: 120px 0;
            margin: 0 auto;
        }
        .section-title::before{
            position: absolute;
            content: '';
            width: 350px;
            height: 8px;
            bottom: 14px;
            background: #FDDF55;
            display: block;
            z-index: -1;
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
                        margin-right: 50px;
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