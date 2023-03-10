<template lang="pug">
.content
    h1 Акции и бонусы
    BonusesPromo   
</template>

<script>
export default{
    name: 'AboutUs',
    head(){
        return {
          title: 'О Компании Fruit Atlas'
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
            width: 900px;
            margin: 0 auto;
    }
    h1{
        margin-bottom: 20px;
    }
    p{
        white-space: pre-line;
        @media(min-width: 992px){
            font-size: 18px;
        }
        span{
        font-family: "EuclidBold";
    }
    }
}

</style>