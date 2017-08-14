<template>
    <section id="content_wrap">
        <!-- 轮播图start -->
        <v-swiper></v-swiper>
        <!-- 轮播图end -->
        <!-- 主页导航start -->
        <v-homeNav></v-homeNav>
        <!-- 主页导航end -->
        <!--  热点资讯start -->
        <v-homeNews></v-homeNews>
        <!--  热点资讯end -->
        <!--  精彩视频start -->
        <v-homeVideo></v-homeVideo>
        <!--  精彩视频end -->
        <!-- 精品攻略start -->
        <v-homeStr></v-homeStr>
        <!-- 精品攻略end -->
    </section>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js';
import Lunbotu from '../swiper/swiper.vue';
import HomeNav from './homeNav.vue';
import HomeNews from './homeNews.vue';
import HomeVideo from './homeVideo.vue';
import HomeStr from './homeStr.vue'

export default {
    components: {
        'v-swiper': Lunbotu,
        'v-homeNav': HomeNav,
        'v-homeNews': HomeNews,
        'v-homeVideo': HomeVideo,
        'v-homeStr': HomeStr
    },
    data() {
        return {
            items: [
                { src: './img/1.jpg', msg: '111' },
                { src: './img/2.jpg', msg: '222' },
                { src: './img/3.jpg', msg: '333' }
            ]
        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 5000
        })
    }
}
</script>

<style>
@import url("../../static/css/swiper.min.css");
@import url("../../css/home.css");
</style>
