<template lang="pug">
.bonuses-promo
    .bonus-green(v-for="bonus in bonusesGreen") 
        .title {{ bonus.title }}
        .text {{ bonus.desc }}
    .bonus-orange(v-for="bonus in bonusesOrange") 
        .title {{ bonus.title }}
        .text {{ bonus.desc }}
</template>

<script>
export default{
    name: 'BonusesPromo',
    data() {
        return {
            bonusesGreen: [
                {
                    title: 'Дарим скидку в 5% первому клиенту',
                    desc: 'Нам важно порадовать своих первых клиентов, поэтому мы дарим вам 5% скидку на первый заказ.'
                },
                {
                    title: 'Фруктовая нарезка на второй заказ',
                    desc: 'Если мы порадовали вас в первый раз, то и во второй подарим бонус в виде фруктовой нарезки из свежих и сочных фруктов'
                },
                {
                    title: 'Бесплатная доставка 3-го заказа',
                    desc: 'Если вы все еще с нами, мы просто обязаны отблагодарить вас как следует. \nПоэтому ваш 3 заказ мы доставим за свой счет'
                },
                {
                    title: '5% скидка тебе и приведенному другу',
                    desc: 'Посоветуй наш сервис другу и получите скидки по 5%'
                },
                {
                    title: 'Бесплатная доставка на сумму от 10 000 руб',
                    desc: 'Большой заказ мы доставим до вашей двери абсолютно бесплатно'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.bonuses-promo{
    .bonus-green{
        width: 100%;
        padding: 20px;
        background: #8ed081;
        box-sizing: border-box;
        color: #fff;
        margin-bottom: 20px;
        position: relative;
        padding-bottom: 60px;
        border-radius: 10px;
        white-space: pre-line;
        .title{
            font-family: "EuclidBold";
            font-size: 24px;
            margin-bottom: 10px;
        }
        &:first-child{
            &:before{
                position: absolute;
                content: '1-заказ';
                bottom: 10px;
                right: 20px;
                font-family: "EuclidBold";
                font-size: 37px;
                color: #63a057
            }
        }
        &:nth-child(2){
            &:before{
                position: absolute;
                content: '2-заказ';
                bottom: 10px;
                right: 20px;
                font-family: "EuclidBold";
                font-size: 37px;
                color: #63a057
            }
        }
        &:nth-child(3){
            &:before{
                position: absolute;
                content: '3-заказ';
                bottom: 10px;
                right: 20px;
                font-family: "EuclidBold";
                font-size: 37px;
                color: #63a057
            }
        }
        &:nth-child(3){
            &:before{
                position: absolute;
                content: '3-заказ';
                bottom: 10px;
                right: 20px;
                font-family: "EuclidBold";
                font-size: 37px;
                color: #63a057
            }
        }
        &:nth-child(4){
            background: rgb(237, 170, 103);
            &:before{
                position: absolute;
                content: 'Зови друга';
                bottom: 10px;
                right: 20px;
                font-family: "EuclidBold";
                font-size: 37px;
                color:  rgb(207, 132, 56);
            }
        }
        &:nth-child(5){
            background: rgb(211, 198, 99);
            &:before{
                position: absolute;
                content: 'Везем бесплатно!';
                bottom: 10px;
                right: 20px;
                font-family: "EuclidBold";
                font-size: 37px;
                color:   rgb(179, 163, 41);
            }
        }
    }

}
</style>
