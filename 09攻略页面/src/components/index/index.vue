<template>
    <section class='index'>
        <!-- 轮播图start -->
        <v-swipe :swipeList="swipeList"></v-swipe>
        <!-- 轮播图end -->
    
        <!-- 主页导航start -->
        <v-homeNav></v-homeNav>
        <!-- 主页导航end -->
    
        <!-- 主页内容start -->
        <v-iContent v-for='(item,i) in contList' :key='i' :type='item'></v-iContent>
        <!-- 主页内容end -->
    </section>
</template>

<script>
import config from '../../js/config.js';
import iSwiper from '../swipe/swipe.vue';
import iHomeNav from './homeNav.vue';
import iContent from './homeCont.vue';

export default {
    data() {
        return {
            'swipeList': [],
            'contList': [
                { tab: 'news', msg: '热点资讯', href: 'http://pvp.qq.com/m/m201606/newsList.shtml' },
                { tab: 'video', msg: '精彩视频', href: 'http://pvp.qq.com/m/m201706/strategycenter.shtml' },
                { tab: 'strategy', msg: '精品攻略', href: 'http://pvp.qq.com/m/m201606/strategy.shtml' }
            ]
        }
    },
    methods: {
        getLunbo() {
            let url = config.getHomeLunbo;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.swipeList = body.message;
            });
        }
    },
    components: {
        'v-swipe': iSwiper,
        'v-homeNav': iHomeNav,
        'v-iContent': iContent
    },
    created() {
        this.getLunbo();
    },
    updated() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 3000,
            loop: true
        });
    }
}
</script>

<style>

</style>
