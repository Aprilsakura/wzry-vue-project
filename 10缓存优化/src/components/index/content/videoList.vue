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
import config from '../../../js/config.js';
import HTTP from '../../../js/http.js';

export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getVideo() {
            let url = config.getHomeVideos + '?typelevel1&pageSize=4';
            HTTP.get(url, body => {
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
