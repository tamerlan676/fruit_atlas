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
          title: 'Бонусные программы',
          meta: [
                      { hid: 'description', 
                      name: 'description', 
                      content: 'Заказать фрукты в москве со специальными акциями можно в нашем магазине' },
                ]
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