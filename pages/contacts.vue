<template lang="pug">
.content
    h1 Контактная информация
    .contacts-wrapper 
        .contact
            h3 Служба поддержки клиентов
            a(href="tel:79933645588") +7 993 364 55 88
        .contact
            h3 Свяжитесь с нами в социальных сетях
            .socials 
                a(href="https://vk.com/fruitatlas" target="_blank") 
                    img(width="30px" src="~/assets/images/c-vk.svg")
                a(href="https://wa.me/79933645588" target="_blank") 
                    img(width="30px" src="~/assets/images/c-whats.svg")
                a(href="https://t.me/fruit_atlas" target="_blank") 
                    img(width="30px" src="~/assets/images/c-tlg.svg")
        .contact
            h3 Наш адрес
            .adress Москва, Калужское ш. 10, Мамыри (Рынок Фуд-Сити)
        .map  
            script(type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab3d762716a0237eecc4c9df9f97f757463a39c5155531dbf89da834b1708f588&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=false")

</template>

<script>
export default{
    name: 'AboutUs',
    head(){
        return {
          title: 'Контактная информация'
        }
    },
}
</script>

<style lang="scss" scoped>
.content{
    padding: 16px;
    min-height: 600px;
    @media(min-width: 992px){
            padding: 32px;
            margin: 0 auto;
            width: 900px;
    }
    h1{
        margin-bottom: 20px;
    }
    h3{
        margin-bottom: 10px;
    }
    .contacts-wrapper{
        .contact{
            margin-bottom: 20px;
            .socials{
                display: flex;
                img{
                    margin-right: 10px;
                }
            }
        }
        .map{
            height: 400px;
            border: 1px solid #e5e5e5;
            width: 100%;
        }
    }
}

</style>