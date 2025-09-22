<template lang="pug">
.important
    h2.section-title Самое важное
    .card-wrapper
        .card(v-for="card in importantList" :key="card")
            img(:src="card.img")
            .title {{ card.title }}
            .desc(v-html="card.desc") {{ card.desc }}
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
        padding: 80px 16px 0;
        @media(min-width: 1200px){
            padding: 120px 0 0;
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
                    font-size: 18px;
                    margin-bottom: 16px;
                    font-family: 'OpenSansBold';
                }
                img{
                    width: 50px;
                    height: 50px;
                    margin-bottom: 8px;
                }
                .subtitle{
                    font-size: 18px;
                    margin-bottom: 16px;
                }
                .desc{
                    margin-bottom: 24px;
                    line-height: 24px;
                }
                .desc span{
                        font-family: 'OpenSansBold';
                        color: #12B762;
                }
                .green{
                    font-size: 30px;
                    
                }
            }
        }
        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 40px;
            border-radius: 15px;
            height: 60px;
            width: fit-content;
            color: #fff;
            margin: 0 auto;
            background: #CC66DA;
            @media(min-width: 992px){
              justify-content: start;
            }
            span{
              margin-right: 8px;
            }
          }
        
    }    
    </style>