<template lang="pug">
.breadcrumbs(@click="$router.go(-1)") 
    img(style="height: 30px" src="~/assets/images/back-to-cat.svg")
    |   Назад к списку
</template>

<script>
export default{
    name: 'BreadcrumbsComp',
}
</script>

<style lang="scss" scoped>
.breadcrumbs{
padding: 16px;
display: flex;
align-items: center;
color: #A5A5A5;
@media(min-width: 992px){
    margin-bottom: 40px;
    padding: 0;
}
cursor:pointer;
    img{
    margin-right: 10px;
    }
}
</style>
