<template lang="pug">
.under-products
    h2 Не нашли что искали? 
    .text Возможно товара просто нет на сайте, но мы обязательно найдем его на складе.
    .text Свяжитесь с нами:
    .buttons
        a.whats(href="https://wa.me/79933645588" target="_blank") написать в WhatsApp 
        a.tel(href="tel:+79933645588") позвонить по телефону
</template>

<script>
export default{
    name: 'UnderProducts',
}
</script>

<style lang="scss" scoped>
.under-products{
    padding: 0 16px;
    h2{
        text-align: center;
        margin-bottom: 10px;
    }
    .text{
        text-align: center;
        margin-bottom: 8px;
    }
    .buttons{
        @media(min-width: 992px){
            display: flex;
            width: 650px;
            margin: 0 auto 120px;
            justify-content: space-between;
    }
    .whats, .tel{
        display: flex;
        height: 60px;
        width: 100%;
        align-items: center;
        justify-content: center;
        background: rgb(48, 76, 184);
        border-radius: 10px;
        text-transform: uppercase;
        color: #fff;
        @media(min-width: 768px){
            width: 300px;
            margin: 0 auto;
        }
    }
    .whats{
        background: rgb(20, 131, 33);
        margin-bottom: 10px;
    }
}}
</style>
