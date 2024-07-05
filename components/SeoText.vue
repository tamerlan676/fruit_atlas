<template lang="pug">
.seo-text
    h2.section-title {{ title }}
    p.desc {{ desc }}
</template>

<script>
export default{
    name: 'NumbersComp',
    props: {  
        title: String,
        desc: String,
        list: Array
        },
     data(){
        return{
        }
     }
}
</script>

<style lang="scss" scoped>
.seo-text{
    padding: 24px;
    @media(min-width: 992px){
        padding: 120px 24px;
    }
    @media(min-width: 1200px){
        width: 1120px;
        margin: 0 auto;
    }
    h2{
        @media(min-width: 768px){
            text-align: center;
        }
    }
}
</style>
