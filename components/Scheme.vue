<template lang="pug">
.scheme
    .steps-wrapper
        .step
            img(src="~/assets/images/call.svg")
            .text Принимаем заказ с сайта, по телефону или по WhatsApp
        .step
            img(src="~/assets/images/basket.svg")
            .text Собираем ваш заказ, отбирая все самое свежее
        .step
            img(src="~/assets/images/check.svg")
            .text Сообщаем вам детали заказа и уточняем удобное время доставки
        .step
            img(src="~/assets/images/point.svg")
            .text Доставляем ваш заказ по Москве и МО в течение 2 часов
</template>
    
    <script>
    export default {
      name: 'SchemeComp'
    }
    </script>
    
    <style lang="scss" scoped>
    .steps-wrapper{
            padding:0 24px;
            margin-bottom: 40px;
        @media(min-width: 768px){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 650px;
            margin: 0 auto 40px;
        }
        @media(min-width: 1200px){
            display: grid; 
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 20px;
            width: 1120px;
            margin: 0 auto 80px;
        }
        .step{
        background: #EAEAEA;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        padding: 16px 10px;
        border-radius: 10px;
        line-height: 20px;
        color: #000;
        margin-bottom: 8px;
        @media(min-width: 768px){
            width: 300px;
        }
        @media(min-width: 1200px){
            width: 100%;
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
    .step img{
        margin-right: 14px;
        height: 40px;
    }
    
    </style>