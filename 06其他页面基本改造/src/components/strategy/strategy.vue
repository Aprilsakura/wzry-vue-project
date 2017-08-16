<template>
    <section id="content_wrap">
        <!--搜索区-->
        <div class="search">
            <form action="#" method="get">
                <input type="search" name="search" id="search" placeholder="请输入你想要搜索的英雄名">
                <input type="submit" class="okBtn" id="okBtn" value="">
            </form>
        </div>
        <!-- 轮播图 -->
        <v-swiper :items='items'></v-swiper>
        <!-- 轮播图结束 -->
        <!-- 帖子内容开始-->
        <div class="video_cont">
            <!--帖子导航-->
            <div id="videoNav" class="video_nav">
                <ul>
                    <li class="video_current">
                        <a href="javascript:;">最新</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">新手</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">英雄</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">官方</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">同人</a>
                        <span class="video_nbg"></span>
                    </li>
                </ul>
            </div>
            <!--帖子列表-->
            <div class="index_cont stategy_index_cont strategy_list">
                <ul id="straegy_ul">
                    <li>
                        <a href="strategyPost.html" class="strategy_pic">
                            <img src="../../img/post-list.jpg" alt="" />
                        </a>
                        <div class="strategy_cont">
                            <a href="strategyPost.html">
                                <span class="strategy_title">吸血女王重塑归来，教你芈月正确出装</span>
                                <span class="strategy_desc">芈月重做后变得更为灵活，其大招伤害也有着质的提升，增强了玩家的可操作性。</span>
                                <span class="strategy_num">1044
                                    <span class="ico_read_num"></span>
                                </span>
                                <span class="strategy_time">06-25</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="strategyPost.html" class="strategy_pic">
                            <img src="../../img/post-list.jpg" alt="" />
                        </a>
                        <div class="strategy_cont">
                            <a href="strategyPost.html">
                                <span class="strategy_title">吸血女王重塑归来，教你芈月正确出装</span>
                                <span class="strategy_desc">芈月重做后变得更为灵活，其大招伤害也有着质的提升，增强了玩家的可操作性。</span>
                                <span class="strategy_num">1044
                                    <span class="ico_read_num"></span>
                                </span>
                                <span class="strategy_time">06-25</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="strategyPost.html" class="strategy_pic">
                            <img src="../../img/post-list.jpg" alt="" />
                        </a>
                        <div class="strategy_cont">
                            <a href="strategyPost.html">
                                <span class="strategy_title">吸血女王重塑归来，教你芈月正确出装</span>
                                <span class="strategy_desc">芈月重做后变得更为灵活，其大招伤害也有着质的提升，增强了玩家的可操作性。</span>
                                <span class="strategy_num">1044
                                    <span class="ico_read_num"></span>
                                </span>
                                <span class="strategy_time">06-25</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="strategyPost.html" class="strategy_pic">
                            <img src="../../img/post-list.jpg" alt="" />
                        </a>
                        <div class="strategy_cont">
                            <a href="strategyPost.html">
                                <span class="strategy_title">吸血女王重塑归来，教你芈月正确出装</span>
                                <span class="strategy_desc">芈月重做后变得更为灵活，其大招伤害也有着质的提升，增强了玩家的可操作性。</span>
                                <span class="strategy_num">1044
                                    <span class="ico_read_num"></span>
                                </span>
                                <span class="strategy_time">06-25</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="video_more" id="video_more">
                    <a href="//pvp.qq.com/m/m201606/gonglueSearch.shtml">点击加载更多</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js';
import LbtStr from '../swiper/swiper.vue'
export default {
    data() {
        return {
            items: [
                { src: '../src/img/1.jpg', msg: '111' },
                { src: '../src/img/2.jpg', msg: '222' },
                { src: '../src/img/3.jpg', msg: '333' }
            ]
        }
    },
    components: {
        'v-swiper': LbtStr
    },
    mounted() {
        new Swiper('.swiper-container', {
            autoplay: 3000
        })
    }
}
</script>

<style>
@import url("../../static/css/swiper.min.css");
@import url('../../css/video.css');
</style>
