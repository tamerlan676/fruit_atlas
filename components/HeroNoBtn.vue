<template lang="pug">
.hero
    .wrapper
      h1(v-html="title") {{ title }}
      p.desc(v-html="desc") {{ desc }}
        //- .button
        //-   button(@click="showPopup") Получить прайс
        
    img(:src="img")
    </template>
        
  <script>
      export default {
        name: 'HeroNoBtn',
        props: {
            activeBurger: {
              type: Boolean,
              default: false
            },
            title: String,
            desc: String,
            img: String
        },
        data() {
          return{
    
          }
        },
        methods: {
        },
        computed: {

        },
      }
  </script>
        
        <style scoped lang="scss">
        .hero{
          z-index: 2;
          position: relative;
          .wrapper{
              padding: 24px;
               @media(min-width: 768px){
                  text-align: center;
              }
              @media(min-width: 992px){
                padding: 80px 0;
                width: 800px;
                margin: 0 auto;
              }
          }
          h1{
            color: #000;
            font-size: 32px;
            line-height: 40px;
            margin-bottom: 24px;
            white-space: pre-line;
            @media(min-width: 1200px){
              font-size: 35px;
              margin-bottom: 16px;
            }
          }
          .desc{
            margin-bottom: 24px;
          }
          img{
            max-width: 100%;
            margin: 0 auto;
            display: block;
          }

        }
        </style>