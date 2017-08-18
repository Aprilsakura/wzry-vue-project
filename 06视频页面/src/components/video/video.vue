<template>
    <section class='video'>
        <!-- Swiper -->
        <v-swipe :swipeList="swipeList"></v-swipe>
        <!-- 轮播图结束 -->
        <!-- 视频站内容开始-->
        <v-vContent></v-vContent>
        <!-- 视频站内容结束-->
    </section>
</template>

<script>
import config from '../../js/config.js';
import vSwipe from '../swipe/swipe.vue';
import vContent from '../video/videoCont.vue';

export default {
    data() {
        return {
            swipeList: ''
        }
    },
    methods: {
        getLunbo() {
            let url = config.getVieoLunbo;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.swipeList = body.message;
            });
        }
    },
    components: {
        'v-swipe': vSwipe,
        'v-vContent': vContent
    },
    created() {
        this.getLunbo()
    },
    updated() {
        new Swiper('.swiper-container', {
            autoplay: 3000,
            loop: true,
        });
    }
}
</script>

<style lang='less'>
@import '../../style/video.less';
</style>
