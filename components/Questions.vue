<template lang="pug">
.questions
    h2.section-title Ответы на часто задаваемые вопросы
    .question-block(v-for="item in questions") 
        .question(@click=" item.open = !item.open") 
            .text {{ item.question }}
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
                        question: 'Откуда берутся ваши фрукты?',
                        answer: 'Мы занимаемся розничной торговлей фруктов и овощей уже 8 лет. Работаем на прямую только с проверенными поставщиками, которые привозят лучшие фрукты со всего мира.',
                        open: false
                    },
                    {
                        question: 'Как быстро доставляются корзины?',
                        answer: 'Весь процесс доставки корзины, от ее сбора до доставки обычно занимает 2 - 3 часа.',
                        open: false
                    },
                    {
                        question: 'Доставка платная?',
                        answer: 'В пределах МКАД доставка бесплатная. За переделами МКАД цена доставки рассчитывается отдельно',
                        open: false
                    },
                    {
                        question: 'Могу ли я добавить в корзину что-то кроме фруктов?',
                        answer: 'Мы сможем положить в вашу корзину любые продукты, так как мы находимся на рынке "Фуд-Сити" и можем найти что угодно. Просто позвоните и сообщите нам об этом заранее',
                        open: false
                    },
                    {
                        question: 'Могу ли я менять фрукты в корзине?',
                        answer: 'Вы без проблем можете менять состав корзины. Ну или собрать корзину с помощью нашего конструктора',
                        open: false
                    },
                    {
                        question: 'Качественные ли фрукты будут в корзине?',
                        answer: 'Мы собираем корзину только из свежих и спелых фруктов. Если вдруг мы понимаем, что плод не подходит по качеству, мы заменяем его другим. Но конечно же, предупреждаем об этом покупателя.',
                        open: false
                    },
                    {
                        question: 'Как бывает упакована корзина?',
                        answer: 'Мы упаковываем корзины с фруктами в прозрачную пленку и украшаем бантом из рафии ручной работы. Так же мы кладем в каждую корзину открытки с вашим текстом.',
                        open: false
                    },
                    {
                        question: 'Могу ли я увидеть корзину перед отправкой близкому человеку?',
                        answer: 'Мы можем прислать фото или видео вашей корзины, прежде чем она поедет до получателя',
                        open: false
                    },
                    {
                        question: 'Если мне не понравится корзина?',
                        answer: 'Если вы поймете, что корзина не соответсвует вашим ожиданям, мы вернем все до копейки.',
                        open: false
                    },
                ]
            }
        }
    
    }
    </script>
    
    <style lang="scss" scoped>
    .questions{
       padding: 40px 24px;
       @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
            padding: 120px 0;
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
       .question-block{
            border-bottom: 2px solid #9D9D9D;
            color: #9D9D9D;
            overflow: hidden;
            position: relative;
            .question{
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                height: 50px;
                .text{
                    width: 300px;
                }
                .plus{
                    width: 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    font-family: "Light";
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
            }
       }
    }
    
    </style>