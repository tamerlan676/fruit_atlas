<template lang="pug">
section.reviews
    h2.section-title(v-html="title") {{ title }}
    .reviews-wrapper
        .review(v-for="(review, i) in reviews" :key="i")
            .header 
                .circle {{ review.letter }}
                .name {{ review.name }}
            .stars
                img(src="~/assets/images/stars.svg")
            .main
                p.text {{ review.text }}
            .avito 
                img(src="~/assets/images/avito.png")
    a.btn(href="https://www.avito.ru/moskva/produkty_pitaniya/dostavka_ovoschey_i_fruktov_s_fud_siti_3382360582#open-reviews-list" target="_blank") Все наши отзывы на Avito
    </template>
    
    <script>
    export default {
        name: 'ReviewsComp',
      data() {
        return {
            title: `Реальные отзывы клиентов`,
          reviews: [   
            {   letter: 'Е',
                name: 'Екатерина',
                text: 'Спасибо большое продавцу. Очень быстро отвечает, привезли быстро и все абсолютно товары свежие и вкусные. Обязательно буду заказывать еще!'
            }, 
            {   letter: 'М',
                name: 'Марина',
                text: 'Продавец просто супер! Я 2 недели искала адекватного поставщика. Ребята помогли мне подобрать нужный ассортимент с приемлемой ценой, нашли недорогую доставку. Внимательно отнёслись к пожеланиям. Вообщем, очень рекомендую!'
            }, 
            {   letter: 'Т',
                name: 'Танюша',
                text: 'В первый раз обратилась к поставщику,привезли товар очень хороший все по весу сходиться качество на высшем уровне,рекомендую с ними работать,спасибо большое вам'
            }, 
            {   letter: 'Ю',
                name: 'Юлия',
                text: 'Очень четко, открыто и быстро отгрузили, организовали отправку овощей. Овощи все отличные, свежие, чистые и очень вкусные. Брали много, консервировали. Мама просто счастлива! Благодарю вас!'
            }, 
            {   letter: 'К',
                name: 'Кирилл',
                text: 'Очень доволен сделкой! Скинул список, получил цены, оформил заказ. Ребята собрали все, проверили и отправили. Спасибо, буду обращаться еще.'
            }, 
          ],
          index: null,
        }
      }
    }
    </script>
    
    <style lang="scss" scoped>
    .reviews{
        padding: 80px 16px 0;
        @media(min-width: 1200px){
            width: 1120px;
            padding: 120px 0 0;
            margin: 0 auto;
        }
        .section-title{
            text-align: center;
            margin-bottom: 40px;
        }
        .reviews-wrapper{
            margin-bottom: 24px;
            @media(min-width: 992px){
                margin-bottom: 40px;
            }
            @media(min-width: 1200px){
                margin: 0 auto 40px;
            }
            .review{
                margin-bottom: 20px;
                padding: 24px 0;
                border-top: 1px solid #e5e5e5;
                position: relative;
                &:last-child{
                    border-bottom: 1px solid #e5e5e5;
                    margin-bottom: 0;
                }
                .header{
                    display: flex;
                    margin-bottom: 16px;
                    align-items: center;
                    .name{
                        margin-right: 8px;
                        font-family: 'OpenSansBold';
                    }
                    .circle{
                        width: 40px;
                        height: 40px;
                        border-radius: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        margin-right: 8px;
                        background: #FAEB92;
                        font-size: 20px;
                    }
                }
                .stars{
                    margin-bottom: 8px;
                }
                .main{
                    display: flex;
                    @media(min-width: 992px){
                        width: 600px;
                    }

                }
                .avito{
                        position: absolute;
                        right: 16px;
                        top: 16px;
                        opacity: 0.3;
                    }
            }
        }
        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 40px;
            border-radius: 15px;
            height: 60px;
            width: fit-content;
            color: #fff;
            margin: 0 auto;
            background: #CC66DA;
            @media(min-width: 992px){
              justify-content: start;
            }
            span{
              margin-right: 8px;
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