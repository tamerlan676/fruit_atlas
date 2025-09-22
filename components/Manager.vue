<template lang="pug">
.manager 
    .left 
        h2(v-html="title")
    .manager-block 
        .image
            .tip Отвечу на вопросы
            .tip Узнаю рыночные цены
            .tip Организую доставку
            img(src="~/assets/images/manager.png")
        .manager-name   Тамерлан Менеджер
        a.btn(href="https://wa.me/79188208097")
            span Написать в WhatsApp
            img(src="~/assets/images/wts-white.svg") 
</template>

<script>
export default{
    name: 'ManagerComp',
    props: {  
        title: String,
        desc: String,
        list: Array
        },
     data(){
        return{
        }
     }
}
</script>

<style lang="scss" scoped>
    .manager{
      padding: 80px 16px 0;
      @media(min-width: 992px){
        padding: 120px 0 0;
      }
      h2{
        margin-bottom: 24px;
        font-size: 24px;
        text-align: center;
        @media(min-width: 992px){
          font-size: 32px;
          width: 800px;
          margin: 0 auto 40px;
        }
      }
      .manager-name{
        border: 1px solid #e5e5e5;
        padding: 10px 20px;
        text-align: center;
        width: fit-content;
        margin: -15px auto 20px;
        background: #fff;
        position: relative;
        z-index: 2;
        border-radius: 10px;
        font-family: 'OpenSansMedium';
        position: relative;
        &:before{
          content: 'онлайн';
          position: absolute;
          background: rgb(105, 245, 105);
          padding: 2px 5px;
          width: fit-content;
          font-size: 10px;
          border-radius: 10px;
          left: 0;
          right: 0;
          top: -10px;
          margin: auto;

        }
        @media(min-width: 992px){
          font-size: 24px;
          margin-bottom: 40px;
        }
      }
      .image{
        position: relative;
        width: fit-content;
        margin: 0 auto;
        img{
          max-width: 100%;
          display: block;
          z-index: 1;
        }
        .tip{
          background: rgb(145, 221, 149);
          position: absolute;
          font-size: 12px;
          padding: 10px;
          border-radius: 30px;
          @media(min-width: 992px){
            font-size: 16px;
          }
          &:nth-child(1){
            top: 120px;
          }
          &:nth-child(2){
            top: 160px;
            right: 0;
          }
          &:nth-child(3){
            top: 220px;
            left: 10px;
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
            background: #30b03f;
            @media(min-width: 992px){
              justify-content: start;
            }
            span{
              margin-right: 8px;
            }
          }
    }
</style>
