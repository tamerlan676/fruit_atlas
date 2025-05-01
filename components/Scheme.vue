<template lang="pug">
.scheme
    h2.section-title Честная схема работы
    .steps-wrapper
        .step
            .step-num 1 шаг
            .title Вы присылаете список — мы сразу узнаем цену
            .text Отправьте список нужных фруктов и овощей в удобном мессенджере. Мы моментально узнаём актуальные цены на рынке и сообщаем вам.
        .step
            .step-num 2 шаг
            .title Согласовываем — и собираем заказ вручную
            .text Если цена вас устраивает, наш человек на рынке начинает собирать ваш заказ — лично, отбирая каждый продукт.
        .step
            .step-num 3 шаг
            .title Отправляем курьером день в день
            .text После сборки находим курьера Яндекс Go, грузим и отправляем. Вы получаете товар на адрес в удобное для вас время.
        .step
            .step-num 4 шаг
            .title Проверяете — и только потом оплачиваете
            .text Вы осматриваете товар при получении. Если всё хорошо — оплачиваете. Если нет — мы решаем вопрос сразу. Всё по-честному.
    .buttons
        .button
           a(href="https://wa.me/79188208097" target="_blank") Отправить список в WhatsApp
</template>
    
    <script>
    export default {
      name: 'SchemeComp'
    }
    </script>
    
    <style lang="scss" scoped>
    .scheme{
        padding: 40px 16px;
        
    }
    .steps-wrapper{
            margin-bottom: 20px;
        @media(min-width: 768px){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 650px;
            margin: 0 auto 20px;
        }
        @media(min-width: 1200px){
            display: grid; 
            grid-template-columns: repeat(2, 2fr);
            grid-gap: 20px;
            width: 1120px;
            margin: 0 auto 20px;
        }
        .step{
        background: #EAEAEA;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 20px 16px;
        border-radius: 10px;
        line-height: 20px;
        color: #000;
        margin-bottom: 8px;
        @media(min-width: 768px){
        }
        @media(min-width: 1200px){
            // width: 100%;
        }
        .step-num{
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 24px;
            text-align: center;
            font-family: "EuclidBold";
            @media(min-width: 768px){
                text-align: left;
            }
        }
        .title{
            font-weight: 800;
            font-size: 20px;
            margin-bottom: 8px;
            font-family: "EuclidBold";
        }
    }
    }
    .hello-text{
        text-align: center;
        padding: 24px 16px;
    }
    .scheme h2{
        margin-bottom: 16px;
        text-align: center;
    }

    .buttons{
            @media(min-width: 768px){
              display: flex;
              width: fit-content;
              margin: 0 auto;
            }
            .button{
              @media(min-width: 768px){
                padding: 0 10px;
              }
            }
            button, a{
              display: flex;
              background: #2DBE64;
              color: #fff;
              font-size: 14px;
              width: 100%;
              padding: 20px;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              text-transform: uppercase;
              margin-bottom: 10px;
              @media(min-width: 768px){
                width: fit-content;
                margin: 0 auto;
              }
            }
          }

    
    </style>