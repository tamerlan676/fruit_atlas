<template lang="pug">
.banner 
    .banner-wrapper 
        .left 
            h3(v-html="title")
            p.desc(v-html="desc")
            .buttons 
                .button 
                    a.btn(href="https://wa.me/79188208097")
                        span Узнать цены 
                        img(src="~/assets/images/wts-white.svg") 
        .right
            img(:src='img')
</template>

<script>
export default{
    name: 'BannerComp',
    props: {  
        title: String,
        desc: String,
        img: String
        },
}
</script>

<style lang="scss" scoped>
.banner{
    padding: 80px 16px 0;
    @media(min-width: 992px){
        padding: 80px 0 0;
    }
    .banner-wrapper{
        width: 100%;
        background: #FAEB92;
        overflow: hidden;
        border-radius: 10px;
        @media(min-width: 992px){
            display: flex;
            justify-content: space-between;
            width: 800px;
            margin: 0 auto;
        }
        @media(min-width: 1100px){
            width: 1120px;
            border-radius: 30px;
            }
        .left{
                padding: 24px;
                @media(min-width: 1100px){
                    padding: 80px;
                }
            h3{
                font-size: 24px;
                margin-bottom: 16px;
            }
            .desc{
                margin-bottom: 16px;
                line-height: 24px;
            }
            .buttons{
            @media(min-width: 768px){
              display: flex;
              width: fit-content;
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
        }
        .right{
            display: none;
            @media(min-width: 992px){
                display: flex;
            }
            img{
                @media(min-width: 992px){
                    height: 200px;
                }
                @media(min-width: 1100px){
                    height: 400px;
                }
            }
        }
    }

}
</style>
