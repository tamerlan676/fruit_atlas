<template lang="pug">
.main 
    Hero(:title="heroTitle" :desc="heroDesc" :img="img" @showPopup="showPopup" :benefits="benefits")
    TheImportant(:importantList="importantList")
    Scheme(:steps="scheme")
    Manager(:title="managerTitle")
    Questions
    Banner(:title="bannerTitle" :desc="priceText" :img="priceImg")
    Reviews
    Numbers
    Popup(:showPopup="showPopup" @showPopup="showPopup")
</template>
    
    <script>
    export default{
      layout: 'purple',
      data() {
        return {
          heroTitle: `Доставка фруктов и&nbsp;овощей с&nbsp;рынка Фуд&nbsp;Сити по&nbsp;Москве`,
          heroDesc: `Организуем для вас доставку с&nbsp;рынка по&nbsp;любому вашему запросу.`,
          benefits: ['Контроль качества', 'Удобная доставка', 'Рыночные цены', 'Широкий ассортимент', 'Опт и розница'],
          priceText: `Мы хотим, чтобы вы всегда получали самые свежие фрукты и&nbsp;овощи по&nbsp;лучшей цене. Так как рынок живет своей динамикой, цены меняются ежедневно. Просто напишите, что&nbsp;вам нужно, и&nbsp;мы&nbsp;оперативно соберем акутальные цены и&nbsp;пришлем вам.`,
          bannerTitle: `Как узнать цены на&nbsp;фрукты и&nbsp;овощи?`,
          priceImg: require('~/assets/images/prices.jpg'),
          importantList: [
            {
              img: require('~/assets/images/icon-price.svg'),
              title: 'Стоимость заказа',
              desc: `Мы закупаем для вас товары по&nbsp;рыночным ценам. За&nbsp;сборку и&nbsp;погрузку мы берем <span style="font-family: 'OpenSansBold'; color: #048743; font-size: 17px;">10%&nbsp;от&nbsp;общей суммы заказа.</span>`,
              green: '10% от суммы'
            },
            {
              img: require('~/assets/images/icon-minimal.svg'),
              title: 'Минимальный заказ',
              desc: `Минимальный заказ, который мы&nbsp;можем собрать для&nbsp;вас начинается <span style="font-family: 'OpenSansBold'; color: #048743; font-size: 17px;">от&nbsp;15&nbsp;000&nbsp;руб.</span> Если сумма меньше, то&nbsp;обсудим детали.`,
              green: 'от 15 000 руб'
            },
            {
              img: require('~/assets/images/icon-del.svg'),
              title: 'Доставка заказа',
              desc:  `Найдем для вас курьера <span style="font-family: 'OpenSansBold'; color: #048743; font-size: 17px;">Яндекс&nbsp;Go</span>, загрузим товар и&nbsp;отправим куда необходимо.`,
              green: 'Яндекс Go'
            },
            {
              img: require('~/assets/images/icon-pay.svg'),
              title: 'Оплата заказа',
              desc: `Вы оплачиваете заказ <span style="font-family: 'OpenSansBold'; color: #048743; font-size: 17px;">при&nbsp;получении,</span> только после того, как убедитесь в&nbsp;свежести и&nbsp;качестве продуктов.`,
              green: 'По факту'
            },
          ],
          scheme: [
            {
              step: '1 шаг',
              title: `Вы присылаете список, мы&nbsp;предоставляем цену`,
              desc: `Отправьте список нужных фруктов и&nbsp;овощей. <br>Мы оперативно соберем актуальные цены на&nbsp;рынке и&nbsp;сообщим вам.`,
            },
            {
              step: '2 шаг',
              title: `Согласовываем цену и&nbsp;собираем заказ`,
              desc: `Если цена вас устраивает, мы&nbsp;начинаем собирать ваш заказ, отбирая каждый продукт.`,
            },
            {
              step: '3 шаг',
              title: `Отправляем заказ курьером`,
              desc: `Находим курьера Яндекс Go, грузим и&nbsp;отправляем. <br>Вы получаете товар на&nbsp;адрес в&nbsp;удобное для вас время.`,
            },
            {
              step: '4 шаг',
              title: `Проверяете и только потом оплачиваете`,
              desc: `Вы осматриваете товар при получении. <br>Если всё хорошо оплачиваете, если нет,&nbsp;мы&nbsp;найдем честное решение.`,
            },
          ],
          managerTitle: 'Напишите своему личному менеджеру на&nbsp;рынке Фуд&nbsp;Сити',
          chessTitle: 'Почему мы?',
          bannerDesc: 'Просто позвоните нам по телефону или оставьте заявку на сайте. Менеджер свяжется с вами, уточнит все детали и предложит лучшие условия сотрудничества. Мы открыты для диалога и готовы обсуждать индивидуальные пожелания.',
          bannerImg: require('~/assets/images/banner.png'),
          img: require('~/assets/images/fc-hero.png'),
          showPopup: false,
          bannerPrice: 'Как узнать ассортимент и цены?',
          bannerPriceText: 'Ассортимент и точную цену на фрукты и овощи можно получить свяжавшись с нашим менеджером. Он оперативно предоставит всю информацию',
          bannerPriceImg: require('~/assets/images/banner.png')
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
    