<template>
    <!-- 视频站内容开始-->
    <div class="video_cont">
        <v-vNav :list='navList' @getVList='getVideoList'></v-vNav>
        <!-- 视频列表 -->
        <v-vList :list='videoList'></v-vList>
    </div>
    <!-- 视频站内容结束-->
</template>

<script>
import config from '../../js/config.js';
import vNav from './vCont/vNav.vue';
import vList from './vCont/vList.vue';

export default {
    data() {
        return {
            'navList': [],
            'videoList': []
        }
    },
    components: {
        'v-vNav': vNav,
        'v-vList': vList
    },
    methods: {
        getNavList() {
            let url = config.getVideoType;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) {
                    var _list = this.navList;
                    body.message.forEach(function (value) {
                        if (value.levelno == 1) {
                            _list.push(value)
                        }
                    });
                    // this.getVideoList(this.navList[0].vtype)
                }
            })
        },
        getVideoList() {
            let url = config.getVideos + '?type=' + arguments[0];
            console.log(url);
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.videoList = body.message
            })
        }
    },
    created() {
        this.getNavList();
    }
}
</script>

<style lang='less'>
@import '../../style/video.less';
</style>
