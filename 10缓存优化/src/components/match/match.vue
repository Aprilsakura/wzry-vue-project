<template>
    <section id="content_wrap">
        <div class="mc_block">
            <div class="mc_descinfo">
                <p class="mc_dinfo">
                    <span class="mc_descinfo_title">KPL 王者职业联赛</span>
                    <span class="mc_descinfo_type">官方举办</span>
                </p>
                <p class="mc_data">
                    <span>2017-03-24</span> 至
                    <span>2017-07-08</span>
                </p>
            </div>
        </div>
        <div class="mc_lineinfo">
            <span class="mc_w">进行中</span>
        </div>

        <!--video-->
        <div class="mc_video">
            <img class="video_img" src="../../images/kpl.jpg" alt="KPL 王者职业联赛">
            <div class="video_mask">
                <span class="video_btn_play"></span>
            </div>
        </div>

        <v-mList></v-mList>
    </section>
</template>

<script>
import config from '../../js/config.js';
import mList from './matchList.vue';
export default {
    components: {
        'v-mList': mList
    }
}
</script>

<style lang='less'>
@import '../../style/match.less';
</style>
