<template lang="pug">
.popup(v-if="showPopup")
    .popup-wrapper 
        .popup-header 
            .close(@click="$nuxt.$emit('showPopup', false)") Закрыть X
        h3 Заказать звонок
        form(@submit.prevent="submitForm")
            .field
                label Имя
                input(placeholder="Иван")
            .field
                label Номер телефона
                input(type="tel" @input="onPhoneInput" required v-model="phone" maxlength="18" placeholder="+7 (888) 888-88-88")
            .field
                label Сообщение
                textarea(placeholder="Сообщение")
            button(type="submitForm") Отправить

</template>

<script>
import axios from 'axios'
export default{
    name: 'PopupComp',
    data(){
        return {
            name: '',
            phone: null,
            message: '',
            canSend: false
        }
    },
    props: {  
        showPopup: Boolean
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
            const order = {
                name: this.name,
                phone: this.phone,
                message: this.message
            }
            const message = `Заказ звонка с сайта: Имя: ${order.name} \n Телефон ${order.phone} \n Сообщение: ${order.message}`
            axios.post('https://api.telegram.org/bot5561581589:AAHOqK8z6VzxVouFK0m-pC9u-HruGIPALfs/sendMessage', {
            chat_id: '-1001187047227',
            parse_mode: 'html',
            text: message
            }).then(
                function changeLocation() {
                location.href='/success'
                },
                setTimeout(this.changeLocation, 10000)
            )
            console.log(message)
        },
    }
}
</script>

<style lang="scss" scoped>
.popup{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: -80px;
    z-index: 100;
    @media(min-width: 992px){
        background-color: rgba(28, 30, 31, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        top: 0;
        position: fixed;
    }
    .popup-wrapper{
        background: #fff;
        padding: 40px 24px;
        @media(min-width: 992px){
            width: 500px;
        }
        h3{
            margin-bottom: 24px;
        }
        .field{
            input{
                width: 100%;
                height: 40px;
                font-size: 16px;
                margin-bottom: 16px;
                border: 1px solid #d8dce6;
                border-radius: 3px;
                padding: 5px;
            }
            textarea{
                width: 100%;
                border: 1px solid #d8dce6;
                border-radius: 3px;
                height: 160px;
                margin-bottom: 8px;
                font-size: 16px;
                padding: 5px;
            }
            label{
                color: #656d78;
                margin-bottom: 6px;
                font-family: "EuclidMd";
            }
        }
        button{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgb(75, 184, 75);
            color: #fff;
            padding: 20px;
            border-radius: 10px;
        }
    }
    .popup-header{
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: end;
        color: #656d78;
        margin-bottom: 24px;
        .close{
            cursor: pointer
        }
    }
}
</style>
