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
                        question: 'Как быстро доставляются заказы?',
                        answer: 'Весь процесс доставки вашего заказа обычно занимает 1,5 - 2 часа.',
                        open: false
                    },
                    {
                        question: 'Доставка платная?',
                        answer: 'Да, стоимость доставки в пределах МКАД составляет 1000 руб.',
                        open: false
                    },
                    {
                        question: 'Качественные ли продукты вы привозите?',
                        answer: 'Мы собираем корзину только из свежих и спелых фруктов и овощей. Если вдруг мы понимаем, что плод не подходит по качеству, мы заменяем его другим. Но конечно же, предупреждаем об этом покупателя.',
                        open: false
                    },
                    {
                        question: 'Как бывает упакован заказ?',
                        answer: 'Мы упаковываем товар таким образом, чтобы он доехал до вас в целости и сохранности. Все что мы везем вас, мы достаем с холодильника, а не с прилавка',
                        open: false
                    },
                    {
                        question: 'Могу ли я увидеть фото или видео своего заказа перед отправкой ?',
                        answer: 'Мы можем прислать фото или видео вашего заказа, прежде чем он поедет к вам',
                        open: false
                    },
                    {
                        question: 'А что, если мне не понравится то, что приехало ?',
                        answer: 'Если вы поймете, что продукты не соответсвует вашим ожиданям, мы вернем все до копейки.',
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
                height: 80px;
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