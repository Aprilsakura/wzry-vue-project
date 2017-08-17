<template>
    <section id="content_wrap">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in swipeList" :key="i">
                    <img :src="item.src">
                    <h2>{{item.msg}}</h2>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>
import Swiper from 'swiper';
export default {
    props: [
        'swipeList'
    ],
    mounted() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 5000
        });
    }
}
</script>

<style>
@import '../../static/css/swiper.min.css';
</style>
