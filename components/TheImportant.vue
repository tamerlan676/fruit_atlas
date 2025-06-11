<template lang="pug">
.important
    h2.section-title Самое важное
    .card-wrapper
        .card(v-for="card in importantList" :key="card")
            .title {{ card.title }}
            .desc {{ card.desc }}
            .green {{ card.green }}
    a.btn(href="https://wa.me/79188208097")
        span Написать сборщику
        img(src="~/assets/images/wts-white.svg") 
</template>
    
    <script>
    export default {
      name: 'SchemeComp',
      props: {
      importantList: {
        type: Array,
      },
  },
    }
    </script>
    
    <style lang="scss" scoped>
    .important{
        padding: 40px 16px;
        @media(min-width: 1200px){
            padding: 120px 0;
        }
        .section-title{
            text-align: center;
            margin-bottom: 40px;
        }
        .card-wrapper{
            display: grid;
            grid-gap: 24px;
            margin-bottom: 24px;
            @media(min-width: 992px){
                grid-template-columns: 1fr 1fr;
            }
            @media(min-width: 1200px){
                width: 1120px;
                margin: 0 auto 40px;
            }
            .card{
                border: 1px solid #e5e5e5;
                box-shadow: 4px 4px 8px 0px rgba(214, 214, 214, 0.2);
                border-radius: 10px;
                padding: 16px;
                .title{
                    font-size: 24px;
                    font-family: "EuclidBold";
                    margin-bottom: 16px;
                    color: #666666
                }
                .subtitle{
                    font-size: 18px;
                    font-family: "EuclidBold";
                    margin-bottom: 16px;
                }
                .desc{
                    margin-bottom: 24px;
                    line-height: 24px;
                }
                .green{
                    color: #12B762;
                    font-family: "EuclidBold";
                    font-size: 30px;

                }
            }
        }
        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            border-radius: 15px;
            height: 50px;
            width: fit-content;
            color: #fff;
            margin: 0 auto 24px;
            background: linear-gradient(#D198E5, #C856F0);
            @media(min-width: 992px){
              justify-content: start;
              margin: 0 auto;
            }
            @media(min-width: 1200px){
              margin-bottom: 40px;
            }
            span{
              margin-right: 8px;
            }
          }
        
    }    
    </style>