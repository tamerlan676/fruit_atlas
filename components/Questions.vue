<template lang="pug">
.questions
    h2.section-title Ответы на часто задаваемые вопросы
    .question-block(v-for="item in questions" ) 
        .question(@click=" item.open = !item.open") 
            .text(v-html="item.question")
            .plus(:class="{ rotate: item.open === true }")
        .answer(:class="{ open: item.open === true }") {{ item.answer }}
</template>
    
    <script>
    export default {
        name: 'QuestionsAnswers',
        data() {
            return {
                questions: [

                    {
                        question: 'Если у меня заказ меньше чем на 15&nbsp;000&nbsp;руб ?',
                        answer: 'Мы соберем для вас и его, но возьмем за свои услуги 1 500 руб помимо стоимости самого заказа',
                        open: false
                    },
                    {
                        question: 'Вы работаете по безналичному расчету ?',
                        answer: 'Да работаем. Но только если ваш заказ более 30 000 руб',
                        open: false
                    },
                    {
                        question: 'Могу ли я заказать в офис ?',
                        answer: 'Да, вы можете заказать фрукты и овощи как домой, так и в офис или любое другое место. У нас есть предложения для оптовых и розничных клиентов',
                        open: false
                    },
                    {
                        question: 'А есть ли у вас самовывоз ?',
                        answer: 'Да, мы соберем заказ к вашему приезду и поможем загрузить',
                        open: false
                    },
                    {
                        question: 'Могу ли я увидеть фото заказа перед отправкой ?',
                        answer: 'Да, мы можем делиться фотографиями того, что вы хотите',
                        open: false
                    },
                    {
                        question: 'А что, если мне попался испорченный товар ?',
                        answer: 'Если вы покажете фото порченного товара мы вернем деньги за этот товар',
                        open: false
                    },
                    {
                        question: 'Вы собираете только оптовые заказы?',
                        answer: 'Нет. Мы можем собрать и мелкую розницу. Но цена за розницу немного выше  оптовой',
                        open: false
                    },
                ]
            }
        }
    
    }
    </script>
    
    <style lang="scss" scoped>
    .questions{
       padding: 80px 16px 0;
       @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
            padding: 120px 0 0;
       }
       .section-title{
            text-align: center;
            margin-bottom: 40px;
        }
       .question-block{
            border-bottom: 1px solid #e5e5e5;
            color: #000;
            font-family: 'OpenSansBold';
            overflow: hidden;
            position: relative;
            .question{
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                height: 80px;
                .text{
                    width: fit-content;
                }
                .plus{
                    width: 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    background: #e5e5e5;
                    border-radius: 100%;
                    background: url(../assets/images/plus.svg);
                    background-size: cover;
                    transition: all .5s ease;
                    opacity: 0.5;
                    &.rotate{
                        transform: rotate(45deg);
                    }
                }
            }
       }
       .answer{
            height: 0;
            transition: all .5s ease;
            color: #000;
            &.open{
                height: fit-content;
                padding: 15px 0;
                font-family: 'OpenSansRegular',
            }
       }
    }
    
    </style>