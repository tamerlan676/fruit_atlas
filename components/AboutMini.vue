<template lang="pug">
.about-mini
    h1 {{ text }}
</template>

<script>
export default{
    name: 'AboutMini',
    data() {
        return {
            text: 'Fruit Atlas — сервис по доставке свежих овощей и фруктов с разных стран мира. \n Мы работаем по следующей схеме:'
        }
    }
}
</script>

<style lang="scss" scoped>
.about-mini{
    padding: 0 16px 40px;
    white-space: pre-line;
    font-family: "EuclidMd";
    @media(min-width: 768px){
        text-align: center;
    }
    @media(min-width: 1200px){
        font-size: 24px;
        width: 1120px;
        text-align: left;
        margin: 0 auto;
    }
    h1{
        font-size: 24px;
        @media(min-width: 1200px){
            font-size: 28px;
        }
    }
}
</style>
