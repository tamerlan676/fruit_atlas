<template lang="pug">
.service-info
    .service-block 
        .info(v-for="item in texts") 
            h3 {{ item.title }}
            p(v-html="item.text") {{ item.text }}
</template>

<script>
export default{
    name: 'ServiceInfo',
    data() {
        return {
            texts: [
                {
                    title: 'Доставка на дом фруктов и овощей',
                    text: `Сделайте заказ сегодня и наслаждайтесь удобством доставки свежих фруктов и овощей прямо к вашему порогу. Больше не нужно стоять в очереди в продуктовом магазине или беспокоиться о том, что продукты испортятся, прежде чем вы сможете их съесть. Позвольте нам позаботиться о ваших потребностях в свежих, полезных фруктах и овощах уже сегодня!`
                },
                {
                    title: 'Для чего употреблять свежие фрукты и овощи?',
                    text: `Употребление в пищу свежих фруктов и овощей обеспечивает множество преимуществ для здоровья. Они богаты необходимыми витаминами и минералами, а также не содержат мало калорий и много клетчатки. Соблюдение диеты с высоким содержанием фруктов и овощей снижает риски хронических сердечных заболеваний, а также помочь в контроле веса. Кроме того, употребление свежих фруктов и овощей улучшает пищеварение и повышает общий уровень энергии.`
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.service-info{
    padding: 0 24px;
    margin-bottom: 40px;
    @media(min-width: 992px){
        padding: 0;
        margin-bottom: 120px;
    }
    .service-block{
        background: #f4f4f4;
        border-radius: 8px;
        padding: 16px;
        @media(min-width: 992px){
            width: 918px;
            margin: 0 auto;
            box-sizing: border-box;
            padding: 32px;
        }
        @media(min-width: 1200px){
           width: 1120px;
        }
        .info{
            margin-bottom: 24px;
            h3{
                font-size: 28px;
                font-family: "EuclidReg"!important;
                margin-bottom: 20px;
            }
        }
    }
}
</style>
