<template lang="pug">
.breadcrumbs 
    nuxt-link(to="/") Главная  
        span /
    nuxt-link(:to="razdel.link") {{ razdel.title }} 
        span / 
    span  {{ currentPage }}
</template>

<script>
export default{
    name: 'BreadcrumbsComp',
    props: {
        currentPage: String,
        razdel: Object // Название папки внутри категории или коллекции
      },
}
</script>

<style lang="scss" scoped>
.breadcrumbs{
    padding: 16px;
    display: flex;
    align-items: center;
    color: #A5A5A5;
    @media(min-width: 992px){
        padding: 0 16px;
        width: 900px;
        margin: 0 auto 40px;
    }
    @media(min-width: 1200px){
        width: 1120px;
        padding: 0;
    }
    a{
        color: #8ed081;
        margin-right: 10px;
    }
}
</style>
