<template>
    <section class='index'>
        <v-swipe :swipeList="swipeList"></v-swipe>
        <!-- 主页导航start -->
        <v-homeNav></v-homeNav>
        <!-- 主页导航end -->
        <!-- 主页内容start -->
        <v-content v-for='(item,i) in contList' :key='i' :type='item'></v-content>
        <!-- 主页内容end -->
        <a href="javascript:void(0);" title="加载更多" class="i-more"></a>
    </section>
</template>

<script>
import iSwiper from '../swipe/swipe.vue';
import iHomeNav from './homeNav.vue';
import iContent from './homeCont.vue';

export default {
    data() {
        return {
            'swipeList': [
                { src: "http://ossweb-img.qq.com/upload/adw/image/1496806834/1496806834.jpg", msg: "王者猴教学" },
                { src: "http://ossweb-img.qq.com/upload/adw/image/1497856410/1497856410.jpg", msg: "KPL战报" },
                { src: "http://ossweb-img.qq.com/upload/adw/image/1497926134/1497926134.jpg", msg: "芈月英雄专题" }
            ],
            'contList': [
                { tab: 'news', msg: '热点资讯', href: 'http://pvp.qq.com/m/m201606/newsList.shtml' },
                { tab: 'video', msg: '精彩视频', href: 'http://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&tid=145262&e_code=pvpapp.targetId_0.r0' },
                { tab: 'strategy', msg: '精品攻略', href: 'http://pvp.qq.com/m/m201606/strategy.shtml' }
            ]
        }
    },
    components: {
        'v-swipe': iSwiper,
        'v-homeNav': iHomeNav,
        'v-content': iContent
    }
}
</script>

<style lang='less'>
@import '../../style/index.less';
</style>
