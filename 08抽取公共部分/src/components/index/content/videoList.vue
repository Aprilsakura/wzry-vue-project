<template>
    <ul class="video_list clearfix" id="index_video_list">
        <li v-for='(item,i) in list' :key='i'>
            <a :href="item.url">
                <img :src="item.img">
                <span class="ico_play"></span>
                <span class="video_title">{{item.title}}</span>
            </a>
        </li>
    </ul>
</template>

<script>
import config from '../../../js/config.js'
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getVideo() {
            let url = config.getHomeVideos + '?typelevel1&pageSize=4';
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.list = body.message;
            })
        }
    },
    created() {
        this.getVideo();
    }
}
</script>

<style lang='less'>
@import '../../../style/videoList.less';
</style>
