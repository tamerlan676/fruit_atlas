<template lang="pug">
.order
    .order-wrapper
        .form-block
            h2 Оформление заказа
            .please Пожалуйста заполните следующие поля:
            form(@submit.prevent="submitForm")
                .line
                    .label Имя
                    input(type="text" required v-model="name" placeholder="Введите ваше имя")
                .line
                    .label Телефон
                    input(type="tel" @input="onPhoneInput" required v-model="phone" maxlength="18" placeholder="+7 (888) 888-88-88")
                .line
                    .label Адрес доставки
                    textarea(type="text" v-model="adress" placeholder="Введите точный адрес")
                button(type="submitForm" :class="{ active: canSend }") Отправить
        .basket 
            h2 Ваш заказ
            .products
                .product(v-for="product in cart")
                    img(:src="product.acf.image")
                    div
                        .title {{ product.title.rendered }}
                        .title 1{{ product.acf.unit }}/{{ product.acf.price }}
                    .count x {{ product.acf.quantity_count }} 
                    .pr-price {{ product.acf.price_count }} ₽
                .price
                    .total Итого:
                    .total-price {{ totalPrice }} ₽
</template>
<script>
import axios from 'axios'
export default{
    name: 'OrderComponent',
    data() {
    return {
        name: '',
        phone: null,
        adress: '',
        canSend: false
    }
    },
    head(){
        return {
            title: 'Оформление заказа',
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        totalPrice() {
            return this.$store.state.totalPrice + this.$store.state.delPrice
        },

    },
    methods: {
        onPhoneInput(event){
            let inputNumbersValue = event.target.value.replace(/\D/g, "");
            let formattedValue = '';

            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            const firstSymbols = (inputNumbersValue[0] === "8") ? "+7" + inputNumbersValue : "+7";
            formattedValue = event.target.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedValue += '-' + inputNumbersValue.substring(9, 11);
        } 
            this.phone = formattedValue
            if(formattedValue.length === 18){
                this.canSend = true
            }else{
                this.canSend = false
            }
        },
        submitForm() {
            const list = this.cart.map((item, index) =>  (index + 1) + ' ' + item.title.rendered + ' - ' + item.acf.quantity_count + ' ' + item.acf.unit + ' ' + item.acf.price_count * Number(item.acf.quantity) + '₽' )
            const order = {
                name: this.name,
                adress: this.adress,
                phone: this.phone,  
                totalPrice: this.totalPrice,
                products: list.join().replace(/,/g, '\n')
            }
            const message = `Заказ на сумму: ${order.totalPrice}₽ \n ${order.products} \n Имя: ${order.name} \n Телефон ${order.phone} \n Адрес: ${order.adress}`
            axios.post('https://api.telegram.org/bot5561581589:AAHOqK8z6VzxVouFK0m-pC9u-HruGIPALfs/sendMessage', {
            chat_id: '-1001187047227',
            parse_mode: 'html',
            text: message
            }).then(
                function changeLocation() {
                location.href='/success'
                localStorage.clear()
                },
                setTimeout(this.changeLocation, 10000)
            )
            console.log(message)
        },
    }
}  
</script>

<styles scoped lang="scss">
.order{ 
    padding: 16px;
    @media(min-width: 992px){
        padding: 80px 0;
    }
    h2{
        margin-bottom: 10px;
    }
    .please{
        margin-bottom: 30px;
    }
    .order-wrapper{
        @media(min-width: 768px){
            display: flex;
            justify-content: space-between;
        }
        @media(min-width: 992px){
            width: 750px;
            margin: 0 auto;
        }
        @media(min-width: 1200px){
            width: 1120px;
            margin: 0 auto; 
        }
        .form-block{
            margin-bottom: 30px;
        }
        form{
            margin-bottom: 30px;
            @media(min-width: 768px){
                width: 400px;
            }
            @media(min-width: 1200px){
                width: 600px;
            }
        }
        .line{
            margin-bottom: 20px;
            .label{
                margin-bottom: 5px;
            }
            input{
                width: 100%;
                height: 40px;
                box-sizing: border-box;
                padding: 5px;
                font-size: 16px;
                border: 1px solid #e5e5e5;
                border-radius: 5px;
                &:focus{
                    outline: none;
                }
            }
            textarea{
                width: 100%;
                height: 90px;
                padding: 5px;
                box-sizing: border-box;
                font-size: 16px;
                border: 1px solid #e5e5e5;
                border-radius: 5px;
                &:focus{
                    outline: none;
                }
            }
        }
    button{
            background: rgb(109, 109, 109);
            color: #fff;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            pointer-events: none;
            transition: all .5s ease;
            &.active{
                background: #000;
                pointer-events: all;
            }
        }  
        .basket{
            @media(min-width: 1200px){
                width: 350px;
            }
            .products{
                    margin-bottom: 32px;

                }
            .product{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
                padding: 8px 0;
                border-bottom: 1px solid rgb(214, 214, 214);
                img{
                width: 60px;
                margin-right: 5px;
                @media(min-width: 1200px){
                    width: 60px;
                }
                }
                .title{
                width: 150px;
                font-weight: 500;
                font-size: 14px;
                @media(min-width: 1200px){
                    font-size: 16px;
                }
                }
                .count{
                font-weight: 500;
                font-size: 14px;
                color: grey;
                margin-right: 15px;
                @media(min-width: 1200px){
                    font-size: 16px;
                }
                }
                .pr-price{
                text-align: right;
                @media(min-width: 1200px){
                    font-size: 16px;
                    font-weight: 500;
                }
                }
            }
            .price{
                display: flex;
                justify-content: space-between;
                margin-bottom: 16px;
                .total{
                font-weight: 500;
                font-size: 18px;
                }
                .total-price{
                color: #499167;
                font-weight: 500;
                font-size: 18px;
                font-family: "EuclidBold";
                }
            }
        } 
    }
}
</styles>