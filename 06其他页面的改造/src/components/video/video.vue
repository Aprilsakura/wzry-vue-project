<template>
    <section id="content_wrap">
        <!-- 轮播图 -->
        <!-- Swiper -->
        <v-swiper :items='items'></v-swiper>
        <!-- 轮播图结束 -->
        <!-- 视频站内容开始-->
        <div class="video_cont">
            <!--视频导航-->
            <div id="videoNav" class="video_nav">
                <ul>
                    <li class="video_current">
                        <a href="javascript:;">赛事</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">英雄</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">解说</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">娱乐</a>
                        <span class="video_nbg"></span>
                    </li>
                    <li>
                        <a href="javascript:;">官方</a>
                        <span class="video_nbg"></span>
                    </li>
                </ul>
            </div>
            <!--视频列表-->
            <div class="list_cont">
                <ul class="video_list clearfix" id="video_list">
                    <li>
                        <a href="videoList.html" title="【KPL预选赛】第1周 LGD 0-2 GK 第1场">
                            <img src="../../img/video_list.png">
                            <span class="ico_play"></span>
                            <span class="video_title">【KPL预选赛】第1周 LGD 0-2 GK 第1场</span>
                        </a>
                        <div class="v_infor">
                            <span class="v_num">
                                <span class="ico_video_num"></span>1.4万
                            </span>
                            <span class="v_time">06-23</span>
                        </div>
                    </li>
                    <li>
                        <a href="videoList.html" title="【KPL预选赛】第1周 LGD 0-2 GK 第1场">
                            <img src="../../img/video_list.png">
                            <span class="ico_play"></span>
                            <span class="video_title">【KPL预选赛】第1周 LGD 0-2 GK 第1场</span>
                        </a>
                        <div class="v_infor">
                            <span class="v_num">
                                <span class="ico_video_num"></span>1.4万
                            </span>
                            <span class="v_time">06-23</span>
                        </div>
                    </li>
                    <li>
                        <a href="videoList.html" title="【KPL预选赛】第1周 LGD 0-2 GK 第1场">
                            <img src="../../img/video_list.png">
                            <span class="ico_play"></span>
                            <span class="video_title">【KPL预选赛】第1周 LGD 0-2 GK 第1场</span>
                        </a>
                        <div class="v_infor">
                            <span class="v_num">
                                <span class="ico_video_num"></span>1.4万
                            </span>
                            <span class="v_time">06-23</span>
                        </div>
                    </li>
                    <li>
                        <a href="videoList.html" title="【KPL预选赛】第1周 LGD 0-2 GK 第1场">
                            <img src="../../img/video_list.png">
                            <span class="ico_play"></span>
                            <span class="video_title">【KPL预选赛】第1周 LGD 0-2 GK 第1场</span>
                        </a>
                        <div class="v_infor">
                            <span class="v_num">
                                <span class="ico_video_num"></span>1.4万
                            </span>
                            <span class="v_time">06-23</span>
                        </div>
                    </li>
                    <li>
                        <a href="videoList.html" title="【KPL预选赛】第1周 LGD 0-2 GK 第1场">
                            <img src="../../img/video_list.png">
                            <span class="ico_play"></span>
                            <span class="video_title">【KPL预选赛】第1周 LGD 0-2 GK 第1场</span>
                        </a>
                        <div class="v_infor">
                            <span class="v_num">
                                <span class="ico_video_num"></span>1.4万
                            </span>
                            <span class="v_time">06-23</span>
                        </div>
                    </li>
                    <li>
                        <a href="videoList.html" title="【KPL预选赛】第1周 LGD 0-2 GK 第1场">
                            <img src="../../img/video_list.png">
                            <span class="ico_play"></span>
                            <span class="video_title">【KPL预选赛】第1周 LGD 0-2 GK 第1场</span>
                        </a>
                        <div class="v_infor">
                            <span class="v_num">
                                <span class="ico_video_num"></span>1.4万
                            </span>
                            <span class="v_time">06-23</span>
                        </div>
                    </li>
                </ul>
                <div class="video_more" id="video_more">
                    <a href="videoSearch.html" title="点击查看更多">点击查看更多</a>
                </div>
            </div>
            <!-- 视频站内容结束-->
    
        </div>
    </section>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js';
import LbtVideo from '../swiper/swiper.vue'
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
        'v-swiper': LbtVideo
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
