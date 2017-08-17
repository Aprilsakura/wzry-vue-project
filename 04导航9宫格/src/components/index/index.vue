<template>
    <section class='index'>
        <!-- 轮播图start -->
        <v-swipe :swipeList="swipeList"></v-swipe>
        <!-- 轮播图end -->
    
        <!-- 主页导航start -->
        <v-homeNav></v-homeNav>
        <!-- 主页导航end -->
    
        <!-- 主页内容start -->
        <!-- <v-content v-for='(item,i) in contList' :key='i' :type='item'></v-content> -->
        <!-- 主页内容end -->
    </section>
</template>

<script>
import iSwiper from '../swipe/swipe.vue';
import config from '../../js/config.js';
import iHomeNav from './homeNav.vue';
import iContent from './homeCont.vue';

export default {
    data() {
        return {
            'swipeList': []
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
        'v-content': iContent
    },
    created() {
        this.getLunbo();
    }
}
</script>

<style lang='less'>
@import '../../style/index.less';
</style>
