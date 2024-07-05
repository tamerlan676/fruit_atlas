<template lang="pug">
.main 
    HeroCenter(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup")
    Chess(:title="chessTitle" :desc="chessDesc" :chessList="chessList")
    .divider
    Banner(:title="bannerTitle" :desc="bannerDesc" :img="bannerImg")
    Numbers
    Reviews
    Questions
    BannerBonus
    Articles(:articles="articles")
    Popup(:showPopup="showPopup" @showPopup="showPopup")
</template>
    
    <script>
    export default{
      data() {
        return {
          heroTitle: `Доставка фруктов и овощей с рынка Фуд Сити`,
          heroDesc: `Мы предлагаем доставку фруктов и овощей с рынка Фуд Сити прямо к вашему порогу. <br>Свяжитесь с нами и мы раскажем вам все подробности`,
          chessTitle: 'Почему мы?',
          chessList: [
            {
              title: 'Индивидуальный подход',
              desc: 'За каждым клиентом закрепляется персональный менеджер, который всегда на связи и готов оперативно решить любые вопросы по заказу. Мы ценим каждого партнера и стремимся выстраивать долгосрочные отношения.',
              img: require('~/assets/images/individ.jpg')
            },
            {
              title: 'Доставка до дверей',
              desc: 'Вам не придется задумываться о логистике и тратить время на поездки по базам. Мы привозим фрукты и овощи по указанному адресу точно ко времени. География доставки охватывает всю Москву.',
              img: require('~/assets/images/del.jpg')
            },
            {
              title: 'Широкий ассортимент',
              desc: 'Помимо стандартного набора фруктов и овощей, мы готовы поставить даже самые редкие и экзотические позиции. Вы сможете разнообразить свое меню, удивить гостей оригинальными блюдами и задать новые гастрономические тренды.',
              img: require('~/assets/images/assort.jpg')
            },
            {
              title: 'Гибкие условия',
              desc: 'Понимая специфику фруктово-овощного бизнеса, мы принимаем заказы в самые сжатые сроки. Утренняя доставка по заявкам, оформленным до вечера предыдущего дня - оптимальный вариант для большинства заведений. При необходимости мы организуем экстренные поставки день в день.',
              img: require('~/assets/images/gibko.jpg')
            }
    
          ],
          bannerTitle: 'Как сделать заказ?',
          bannerDesc: 'Просто позвоните нам по телефону или оставьте заявку на сайте. Менеджер свяжется с вами, уточнит все детали и предложит лучшие условия сотрудничества. Мы открыты для диалога и готовы обсуждать индивидуальные пожелания.',
          bannerImg: require('~/assets/images/banner.png'),
          img: require('~/assets/images/hero.jpg'),
          showPopup: false
        }
      },
      head(){
        return {
          title: '✅ Доставка фруктов и овощей с рынка Фуд Сити',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              hid: 'description',
              name: 'description',
              content: 'Мы закупим и доставим вам фрукты и овощи на рынке Фуд Сити. Оптовые и розничные продажи. Самые свежие и отборные фрукты и овощи.'
            }
          ],
        }
      },
      async fetch ({ store }) {
          await store.dispatch('getFruitsHits')
          await store.dispatch('getVegetablesHits')
          await store.dispatch('getArticles')
      },
      created() {
        this.$nuxt.$on('showPopup', ($event) => this.show($event))
      },
      computed: {
        fruitsHits() {
          return this.$store.state.fruitsHits
        },
        vegetablesHits() {
          return this.$store.state.vegetablesHits
        },
        articles() {
          return this.$store.state.articles
        },
      },
      methods: {
        addToCart(e) {
          this.$store.commit('addToCart', e)
        },
        show(e) {
          console.log(e)
          this.showPopup = e
        },
      }
    }
    </script>
    
    <style lang="scss" scoped>
    .main{
      position: relative;
    }
    .divider{
      height: 80px;
      @media(min-width: 992px){
        height: 120px;
      }
    
    }
    </style>
    