<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item,i) in items' :key='i'>
                <img :src='item.src'>
                <h2>{{item.msg}}</h2>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    props: ['items']
}
</script>

<style>
@import url('../../css/swiper.css');
</style>
