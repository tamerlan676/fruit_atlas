<template lang="pug">
.main 
  Hero(:title="heroTitle" :desc="heroDesc" :img="img" :benefits="benefits")
  Categories
  Hits(:hits="fruitsHits" category="fruits" title="Популярные фрукты" link="https://fruit-atlas.ru/categories/fruits")
  Hits(:hits="vegetablesHits" category="vegetables" title="Популярные овощи" link="https://fruit-atlas.ru/categories/vegetables")
  Manager(:title="managerTitle")
  Reviews
  Banner(:title="bannerTitle" :desc="bannerDesc" :img="bannerImg")
  Numbers
  Questions
  Articles(:articles="articles")
  Popup(:showPopup="showPopup" @showPopup="showPopup")
</template>

<script>
export default{
  data() {
    return {
      heroTitle: `Доставка фруктов и овощей по Москве и МО`,
      heroDesc: `Организуем для вам доставку самых свежих и&nbsp;вкусных фруктов и&nbsp;овощей`,
      chessTitle: 'Преимущества при работе с нами',
      managerTitle: 'Напишите своему личному менеджеру на&nbsp;рынке',
      chessDesc: 'Мы стремимся работать так, чтобы к нам возвращались снова и снова',
      benefits: ['Контроль качества', 'Удобная доставка', 'Рыночные цены', 'Широкий ассортимент', 'Опт и розница'],
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
      bannerTitle: 'Свяжитесь с нами',
      bannerDesc: 'Свяжитесь с нами и мы расскажем, как вам оформить заказ и ответим на все ваши вопросы',
      bannerImg: require('~/assets/images/banner.png'),
      img: require('~/assets/images/hero-fruits.jpg'),
      showPopup: false
        }
      },
      head: {
        link: [
          {
            rel: 'canonical',
            href: 'https://fruit-atlas.ru'
          }
        ]
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
