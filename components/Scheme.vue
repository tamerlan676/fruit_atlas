<template lang="pug">
.scheme
    h2.section-title Как мы работаем
    .steps-wrapper
        .step(v-for="step in steps")
            .step-num {{ step.step }}
            .title(v-html="step.title")
            .text(v-html="step.desc")
    a.btn(href="https://wa.me/79188208097")
        span Отправить список
        img(src="~/assets/images/wts-white.svg") 
</template>
    
    <script>
    export default {
      name: 'SchemeComp',
      props: {
      steps: {
        type: Array
      },
  },
    }
    </script>
    
    <style lang="scss" scoped>
    .scheme{
        padding: 80px 16px 0;
        @media(min-width: 992px){
            padding: 120px 0 0;
        }
        
    }
    .steps-wrapper{
            margin-bottom: 20px;
        @media(min-width: 768px){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 650px;
            margin: 0 auto 40px;
        }
        @media(min-width: 1200px){
            display: grid; 
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            width: 1120px;
        }
        .step{
            background: #ffffff;
            border: 1px solid #e5e5e5;
            box-shadow: 4px 4px 8px 0px rgba(214, 214, 214, 0.2);
            border-radius: 10px;
            padding: 32px 16px;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            margin-bottom: 24px;
            line-height: 24px;
            color: #000;
            position: relative;
            @media(min-width: 768px){
            
            }
            @media(min-width: 1200px){
                margin-bottom: 0;
                // width: 100%;
            }
        .step-num{
            background: #7C4585;
            position: absolute;
            left: 16px;
            top: -16px;
            width: fit-content;
            padding: 5px 10px;
            border-radius: 5px;
            color: #fff;
            font-size: 20px;
            margin-bottom: 16px;
            @media(min-width: 768px){
                text-align: left;
            }
        }
        .title{
            font-size: 20px;
            margin-bottom: 16px;
            font-family: 'OpenSansBold';
        }
    }
    }
    .hello-text{
        text-align: center;
        padding: 24px 16px;
    }
    .scheme h2{
        margin-bottom: 40px;
        text-align: center;
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
    </style>