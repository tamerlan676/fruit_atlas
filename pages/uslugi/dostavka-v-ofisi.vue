<template lang="pug">
.main 
    HeroCenter(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup")
    Scheme
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
          heroTitle: `Доставка фруктов в офисы по Москве`,
          heroDesc: `Мы рады предложить услуги по оптовым поставкам фруктов и овощей для работников. Наша молодая, но динамично развивающаяся компания готова обеспечивать ваш офис самыми свежими и качественными продуктами на регулярной основе.`,
          chessTitle: 'Преимущества при работе с нами',
          chessDesc: 'Мы стремимся работать так, чтобы к нам возвращались снова и снова',
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
              desc: 'Помимо стандартного набора фруктов и овощей, мы готовы поставить даже самые редкие и экзотические позиции. Вы сможете удивить сотрудников оригинальными фруктами.',
              img: require('~/assets/images/assort.jpg')
            },
            {
              title: 'Гибкие условия',
              desc: 'Понимая специфику фруктового бизнеса, мы принимаем заказы в самые сжатые сроки. Утренняя доставка по заявкам, оформленным до вечера предыдущего дня - оптимальный вариант для большинства заведений. При необходимости мы организуем экстренные поставки день в день.',
              img: require('~/assets/images/gibko.jpg')
            },
            {
              title: 'Разные ценовые сегменты',
              desc: 'У нас вы найдете продукцию, которая впишется в концепцию вашей организации. Недорогие овощи и фрукты для демократичных комапний, отборные и редкие сорта для самых крутых компаний - мы подберем оптимальное предложение под ваш бюджет и аудиторию.',
              img: require('~/assets/images/raz-ceni.jpg')
            },
    
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
          title: '✅ Доставка фруктов в организации и офисы по Москве',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              hid: 'description',
              name: 'description',
              content: 'Мы привезем в вашу организацию самые свежие и вкусные фрукты. Сотрудники вашего офиса остаунтся довольны'
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
    