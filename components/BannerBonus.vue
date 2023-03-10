<template lang="pug">
.banner-bonus
    nuxt-link(to="/bonuses")
        .banner
            .text Наши акции и бонусы
</template>

<script>
export default{
    name: 'BannerBonus',
}
</script>

<style lang="scss" scoped>
.banner-bonus{
    padding: 16px;
    margin-bottom: 40px;
    @media(min-width: 992px){
        padding: 0;
        margin-bottom: 80px;
    }
    .banner{
        box-sizing: border-box;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        font-family: "EuclidBold";
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        position: relative;
        background: url(../assets/images/percent.svg), rgb(85, 228, 114);
        @media(min-width: 992px){
            width: 900px;
            margin: 0 auto;
            border-radius: 20px;
        }
        @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto;
            height: 300px;
        }
        .text{
            background: rgb(39, 157, 63);
            padding: 10px;
            animation-name: colored;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            color: white;
            border-radius: 10px;
            @media(min-width: 1200px){
                padding: 20px;
                font-size: 32px;
                border-radius: 20px;
            }   
        }
    }
}
</style>
