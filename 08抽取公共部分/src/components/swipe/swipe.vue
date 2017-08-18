<template>
    <section id="content_wrap">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in swipeList" :key="i">
                    <a :href="item.Url">
                        <img :src="item.lunboImgpath">
                        <h2>{{item.lunboTitle}}</h2>
                    </a>
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
    ]
}
</script>

<style lang='less'>
@import '../../static/css/swiper.min.css';
@import '../../style/swipe.less';
</style>
