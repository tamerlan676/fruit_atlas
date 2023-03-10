<template lang="pug">
.content
    h1 Страница ошибки
    p {{ text }}    
</template>

<script>
export default{
    name: 'AboutUs',
    data() {
        return {
            text: 'Упс! Что-то пошло не так. Возможно такой страницы не существует'
        }
    }
}
    </script>
    
    <style lang="scss" scoped>
    .content{
        padding: 16px;
        min-height: 600px;
        @media(min-width: 992px){
                padding: 32px;
        }
        h1{
            margin-bottom: 20px;
        }
    }
    
    </style>