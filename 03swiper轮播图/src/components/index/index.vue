<template>
    <section class='index'>
        <!-- 轮播图start -->
        <v-swipe :swipeList="swipeList"></v-swipe>
        <!-- 轮播图end -->
    </section>
</template>

<script>
import mSwiper from '../swipe/swipe.vue';

export default {
    data() {
        return {
            'swipeList': [
                { src: "http://ossweb-img.qq.com/upload/adw/image/1496806834/1496806834.jpg", msg: "王者猴教学" },
                { src: "http://ossweb-img.qq.com/upload/adw/image/1497856410/1497856410.jpg", msg: "KPL战报" },
                { src: "http://ossweb-img.qq.com/upload/adw/image/1497926134/1497926134.jpg", msg: "芈月英雄专题" }
            ]
        }
    },
    components: {
        'v-swipe': mSwiper
    }
}
</script>

<style lang='less'>
@import '../../style/index.less';
</style>
