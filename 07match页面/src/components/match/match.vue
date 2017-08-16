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
            <img class="video_img" src="../../img/kpl.jpg" alt="KPL 王者职业联赛">
            <div class="video_mask">
                <span class="video_btn_play"></span>
            </div>
        </div>
        <div class="mc_allB mc_allB_news">赛事资讯</div>
        <v-gameMsg></v-gameMsg>
    </section>
</template>

<script>
import showMore from '../base/more.vue';
export default {
    components: {
        'v-more': showMore
    }
}
</script>

<style>
@import url('../../css/match.css');
</style>
