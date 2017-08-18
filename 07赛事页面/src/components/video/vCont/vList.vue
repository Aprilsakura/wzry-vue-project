<template>
    <!--视频列表-->
    <div class="list_cont">
        <ul class="video_list clearfix" id="video_list">
            <li v-for='(item,i) in list' :key='i'>
                <a :href="item.url" :title="item.title">
                    <img :src="item.img">
                    <span class="ico_play"></span>
                    <span class="video_title">{{item.title}}</span>
                </a>
                <div class="v_infor">
                    <span class="v_num">
                        <span class="ico_video_num"></span>{{item.playnumber}}
                    </span>
                    <span class="v_time">{{item.cdate}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'list'
    ]
}
</script>

<style lang='less'>
@import '../../../style/videoList.less';
</style>
