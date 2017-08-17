<template>
    <ul class="video_list clearfix" id="index_video_list">
        <li v-for='(item,i) in list' :key='i'>
            <a href="javascript:">
                <img :src="item.src">
                <span class="ico_play"></span>
                <span class="video_title">{{item.msg}}</span>
            </a>
        </li>
    </ul>
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
