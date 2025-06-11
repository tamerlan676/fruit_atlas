<template lang="pug">
.main 
    Hero(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup" :benefits="benefits")
    TheImportant(:importantList="importantList")
    Chess(:title="chessTitle" :desc="chessDesc" :chessList="chessList")
    .divider
    Banner(:title="bannerTitle" :desc="bannerDesc" :img="bannerImg")
    Numbers
    Reviews
    Questions
    Articles(:articles="articles")
    Popup(:showPopup="showPopup" @showPopup="showPopup")
</template>
    
    <script>
    export default{
      data() {
        return {
          heroTitle: `Доставка фруктов и овощей с рынка Фуд Сити по Москве и области`,
          heroDesc: `Организуем для вас доставку с рынка по любому вашему запросу.`,
          benefits: ['Контроль качества', 'Удобная доставка', 'Рыночные цены', 'Широкий ассортимент', 'Опт и розница', 'Рыночные цены'],
          importantList: [
            {
              title: 'Стоимость заказа',
              subtitle: 'Свежие фрукты и овощи по рыночным ценам!',
              desc: 'Мы закупаем для вас только товары по рыночным ценам. За сбор и доставку мы добавляем всего 10% к стоимости заказа. Экономьте время, пока мы заботимся о свежести!',
              green: '10% от суммы'
            },
            {
              title: 'Доставка заказа',
              subtitle: 'Удобная доставка прямо к вам!',
              desc: 'Мы доставим ваш заказ через Яндекс Go — быстро и надежно! Стоимость доставки легко уточнить: просто укажите адрес от рынка Фуд Сити в приложении Яндекс Go или отправьте его нам — мы рассчитаем всё за вас',
              green: 'Яндекс Go'
            },
            {
              title: 'Минимальный заказ',
              subtitle: 'Ваш идеальный заказ от 15 000 рублей!',
              desc: 'Только отборные продукты, собранные всё в одном заказе! За 15 000 рублей вы получаете максимальную свежесть и удобную доставку без задержек.',
              green: 'от 15 000 руб'
            },
            {
              title: 'Оплата заказа',
              subtitle: 'Платите с уверенностью!',
              desc: 'Оплачивайте заказ при получении, только после того, как убедитесь в свежести и качестве продуктов. Мы заботимся, чтобы вы остались довольны каждой покупкой!',
              green: 'По факту'
            },
          ],
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
          img: require('~/assets/images/fc-hero.png'),
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
    