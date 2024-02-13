<template lang="pug">
.banner 
    .banner-wrapper 
        .left 
            h3 {{ title }}
            p.desc {{ desc }}
            .buttons 
                .button 
                    button() Написать в уотсап
                .button 
                    button(@click="$nuxt.$emit('showPopup', true)") Заказать звонок
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
    padding: 0 24px;
    .banner-wrapper{
        width: 100%;
        background: #f1f1f1;
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
            }
            .buttons{
            @media(min-width: 768px){
              display: flex;
              width: fit-content;
            }
            button{
              display: flex;
              background: #2DBE64;
              color: #fff;
              width: 100%;
              padding: 20px;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              text-transform: uppercase;
              margin-bottom: 10px;
              @media(min-width: 768px){
                width: 250px;
                margin-right: 10px;
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
