<template lang="pug">
.katalog
    h1.title Каталог товаров
    .desc Всегда самая свежая и отборная продукция под любые нужды
    Categories
    Numbers
</template>

<script>
export default{
    name: 'Katalog',
    head(){
        return {
          title: 'Каталог товаров. Фрукты, овощи, ягоды, зелень',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              hid: 'description',
              name: 'description',
              content: '🍎 Возим фрукты и овощи на дом. Заказывайте доставку самых свежих фруктов и овощей у нас на сайте'
            }
          ],
        }
      },
}
</script>

<style lang="scss" scoped>
.katalog{
  padding: 40px 0;
  h1{
    text-align: center;
    margin-bottom: 32px;
  }
   .desc{
    text-align: center;
    padding: 0 16px;
   }
}

</style>