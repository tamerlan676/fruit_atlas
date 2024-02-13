<template lang="pug">
.numbers
    h2.section-title Наша работа в цифрах
    //- p.desc Описание блока с цифрами и их расшифровка
    .list-numbers
        .item(v-for="item in numbers") 
            .number {{ item.number }}
            .num-desc {{ item.desc }}
</template>

<script>
export default{
    name: 'NumbersComp',
    props: {  
        title: String,
        desc: String,
        list: Array
        },
     data(){
        return{
            numbers: [
                {
                    number: '10+',
                    desc: 'Заказов в день собираем и отправляем в дома и организации'
                },
                {
                    number: '12 фирм',
                    desc: 'Обеспечиваем оптовыми поставками фруктов и овощей с начала 2024 года'
                },
                {
                    number: '30',
                    desc: 'Семей, которые являются нашими постоянными клиентами'
                },
            ]
        }
     }
}
</script>

<style lang="scss" scoped>
.numbers{
    padding: 24px;
    @media(min-width: 992px){
        padding: 120px 0;
    }
    h2{
        @media(min-width: 768px){
            text-align: center;
        }
    }
    .desc{
        margin-bottom: 24px;
        @media(min-width: 768px){
            text-align: center;
        }
        @media(min-width: 992px){
            margin-bottom: 40px;
        }
    }
    .list-numbers{
        @media(min-width: 768px){
            display: flex;
        }
        @media(min-width: 992px){
            margin: 0 auto;
            width: fit-content;
        }
        @media(min-width: 1100px){
            width: 1120px;
            justify-content: space-between;
        }
        .number{
            font-size: 54px;
            font-family: "EuclidBold";
            color: rgb(231, 174, 29);
            @media(min-width: 768px){
                text-align: center;
            }
            @media(min-width: 992px){
                font-size: 72px;
            }
        }
        .num-desc{
            @media(min-width: 768px){
                text-align: center;
            }
            @media(min-width: 992px){
                width: 300px;
            }
        }
        .item{
            margin-bottom: 24px;
        }
    }
}
</style>
