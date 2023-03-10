<template lang="pug">
.content
    h1 Ошибка
    p {{ text }}    
</template>

<script>
export default{
    name: 'AboutUs',
    data() {
        return {
            text: 'Если Вы делаете у нас первый заказ, и его сумма более 10 000 , либо не первый заказ, но его сумма более 20 000 , то необходимо внести предоплату 10% от стоимости заказа. Заказ должен быть оплачен полностью заранее или в момент его передачи.'
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
    }
    h1{
        margin-bottom: 20px;
    }
}

</style>