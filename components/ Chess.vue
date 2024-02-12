<template lang="pug">
.chess
    h2 {{ title }}
    p.title-desc {{ desc }}
    .chess-wrapper 
        .line(v-for="item in chessList") 
            .text
                h3 {{ item.title }}
                p.desc {{ item.desc }}
            .image
                img(:src='item.img')
            
</template>

<script>
export default{
    name: 'ChessComp',
    props: {  
        chessList: Array,
        title: String,
        desc: String
    },
}
</script>

<style lang="scss" scoped>
.chess{
    padding: 24px;
    background: rgb(245, 245, 245);
    @media(min-width: 992px){
        padding: 120px 0;
    }
    h2{
        margin-bottom: 16px;
        font-family: "EuclidBold";
        @media(min-width: 992px){
            text-align: center;
            font-size: 40px;
        }
    }
    .title-desc{
            margin-bottom: 24px;
        @media(min-width: 992px){
            text-align: center;
            width: 800px;
            display: block;
            margin: 0 auto 90px;
        }
    }
    .line{
        margin-bottom: 24px;
        @media(min-width: 992px){
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto 40px;
        }
        @media(min-width: 1200px){
            width: 1120px;
            
        }
        .text{
            @media(min-width: 992px){
                width: 448px;
            }
        }
        h3{
            font-family: "EuclidBold";
            margin-bottom: 16px;
            @media(min-width: 992px){
                font-size: 32px;
            }
        }
        .desc{
            margin-bottom: 16px;
        }
        img{
            max-width: 100%;
            @media(min-width: 992px){
                width: 544px;
                height: 480px;
            }
        }
        &:nth-child(2){
            flex-direction: row-reverse;
        }
    }
}
</style>
