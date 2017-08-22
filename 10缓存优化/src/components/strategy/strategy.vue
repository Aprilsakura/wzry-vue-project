<template>
    <section class='content_wrap'>
        <!--搜索区-->
        <div class="search">
            <form action="#" method="get">
                <input type="search" name="search" id="search" placeholder="请输入你想要搜索的英雄名">
                <input type="submit" class="okBtn" id="okBtn" value="">
            </form>
        </div>
        <!-- Swiper -->
        <v-swipe :swipeList="swipeList"></v-swipe>
        <!-- 轮播图结束 -->
        <!-- 视频站内容开始-->
        <v-sContent></v-sContent>
        <!-- 视频站内容结束-->
        <div class="video_more" id="video_more">
            <a href="http://pvp.qq.com/m/m201606/search.shtml" title="点击查看更多">点击查看更多</a>
        </div>
    </section>
</template>

<script>
import config from '../../js/config.js';
import HTTP from '../../js/http.js';

import sSwipe from '../swipe/swipe.vue';
import sContent from './strategyCont.vue';

export default {
    data() {
        return {
            swipeList: ''
        }
    },
    methods: {
        getLunbo() {
            let url = config.getStategyLunbo;
            HTTP.get(url, body => {
                this.swipeList = body.message;
            });
        }
    },
    components: {
        'v-swipe': sSwipe,
        'v-sContent': sContent
    },
    created() {
        this.getLunbo()
    },
    updated() {
        new Swiper('.swiper-container', {
            autoplay: 3000,
            // loop: true,
        });
    }
}
</script>

<style lang='less'>
@import '../../style/video.less';
body {
    background-color: #fff;
}

.search {
    position: relative;
    background: #f1f3f5;
    width: 6.82rem;
    height: 0.48rem;
    line-height: 0.48rem;
    margin: 0.17rem auto;
    border-radius: 5px;
}

.search input {
    width: 88%;
    height: 0.48rem;
    line-height: 0.48rem;
    border: 0;
    padding-left: 0.7rem;
    font-size: 0.22rem;
    background: #f1f3f5;
    color: #a4abae;
    position: absolute;
    top: 0px;
    left: 0px;
}

.search .okBtn {
    position: absolute;
    width: 0.28rem;
    height: 0.28rem;
    left: 5px;
    top: 5px;
    background: url(../../images/seach.png) no-repeat center;
    background-size: 0.28rem 0.28rem;
}

.index_cont {
    border-bottom: none !important;
}
</style>