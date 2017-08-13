<template>
    <section id="content_wrap">
        <!-- 轮播图 -->
        <!-- Swiper -->
        <v-swiper></v-swiper>
        <!-- 轮播图结束 -->
        <!-- 主页导航start -->
        <!-- <div class="home_nav clearfix">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="heroList.html">
                                                                                        <i class="icon_1"></i>
                                                                                        <span>英雄介绍</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="activity.html">
                                                                                        <i></i>
                                                                                        <span>活 动</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="match.html">
                                                                                        <i></i>
                                                                                        <span>赛 事</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/cp/a20161116tyf/page01.htm">
                                                                                        <i></i>
                                                                                        <span>体验服</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="newsList.html">
                                                                                        <i></i>
                                                                                        <span>资 讯</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://agame.qq.com/bbs_joy/forum.shtml?fid=56891&frompcbbs=1&mod=forumdisplay&ADTAG=game.web.yxzj&c=forum&m=forum">
                                                                                        <i></i>
                                                                                        <span>社 区</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/m/m201606/goCenter.shtml">
                                                                                        <i></i>
                                                                                        <span>新 手</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG">
                                                                                        <i></i>
                                                                                        <span>故事站</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div> -->
        <!-- 主页导航end -->
        <!--  热点资讯start -->
        <!-- <div class="index_cont">
                                                                            <div class="index_cont_title">
                                                                                <span class="ico_news"></span>
                                                                                <h3>热点资讯</h3>
                                                                                <a href="http://pvp.qq.com/m/m201606/newsList.shtml" onclick="pgvSendClick({hottag: 'mobile.moreNav.news'});" class="ico_more">more</a>
                                                                            </div>
                                                                            <ul class="news_list">
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24988/m15626/201706/598754.shtml" onclick="pgvSendClick({hottag:'mobile.newsList.news1'});">
                                                                                        <span class="category">新闻</span>
                                                                                        <span class="split">|</span>
                                                                                        <span class="title">妲己情报站——新版本大爆料！社交优化抢先看</span>
                                                                                        <span class="time">06/21</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24991/m15626/201706/598476.shtml" onclick="pgvSendClick({hottag:'mobile.newsList.news2'});">
                                                                                        <span class="category">赛事</span>
                                                                                        <span class="split">|</span>
                                                                                        <span class="title">KPL每周话题：四强出炉，谁主沉浮？</span>
                                                                                        <span class="time">06/21</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24989/m15626/201706/598019.shtml" onclick="pgvSendClick({hottag:'mobile.newsList.news3'});">
                                                                                        <span class="category">公告</span>
                                                                                        <span class="split">|</span>
                                                                                        <span class="title">6月20日全服不停机更新公告</span>
                                                                                        <span class="time">06/20</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div> -->
        <!--  热点资讯end -->
        <!--  精彩视频start -->
        <!-- <div class="index_cont">
                                                                            <div class="index_cont_title">
                                                                                <span class="ico_video"></span>
                                                                                <h3>精彩视频</h3>
                                                                                <a href="http://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&tid=145262&e_code=pvpapp.targetId_0.r0" onclick="pgvSendClick({hottag: 'mobile.moreNav.videos'});" class="ico_more">more</a>
                                                                            </div>
                                                                            <ul class="video_list clearfix" id="index_video_list">
                                                                                <li>
                                                                                    <a href="">
                                                                                        <img src="http://shp.qpic.cn/qqvideo_ori/0/i034295c1v3_228_128/0" alt="【荣耀时刻】Shadow强势五杀 联赛时长再刷新">
                                                                                        <span class="ico_play"></span>
                                                                                        <span class="video_title">KPL第一周 ESTAR气势KPL第一周 </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="">
                                                                                        <img src="http://shp.qpic.cn/qqvideo_ori/0/i034295c1v3_228_128/0" alt="【荣耀时刻】Shadow强势五杀 联赛时长再刷新">
                                                                                        <span class="ico_play"></span>
                                                                                        <span class="video_title">KPL第一周 ESTAR气势</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="index_cont stategy_index_cont">
                                                                            <div class="index_cont_title">
                                                                                <span class="ico_strategy"></span>
                                                                                <h3>精品攻略</h3>
                                                                                <a href="http://pvp.qq.com/m/m201606/strategy.shtml" class="ico_more">more</a>
                                                                            </div>
                                                                            <ul class="strategy_list" id="index_str_list">
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=91224" class="strategy_pic">
                                                                                        <img src="http://shp.qpic.cn/cfwebcap/791243504/e3e56dcf4af1719a7ce28c3ada5cee80/0/" alt="KPL每周话题：四强出炉，谁主沉浮？">
                                                                                    </a>
                                                                                    <div class="strategy_cont">
                                                                                        <a href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=91224">
                                                                                            <span class="strategy_title">KPL每周话题：四强出炉，谁主沉浮？</span>
                                                                                            <span class="strategy_desc">KPL每周话题：四强出炉，谁主沉浮？</span>
                                                                                            <span class="strategy_num">947
                                                                                                <span class="ico_read_num"></span>
                                                                                            </span>
                                                                                            <span class="strategy_time">06-21</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=91225" class="strategy_pic">
                                                                                        <img src="http://shp.qpic.cn/cfwebcap/791243504/7aee94e5b242b6ecd846df874764945c/0/" alt="《集结吧！王者》分组曝光，田亮秒选叶一茜">
                                                                                    </a>
                                                                                    <div class="strategy_cont">
                                                                                        <a href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=91225">
                                                                                            <span class="strategy_title">《集结吧！王者》分组曝光，田亮秒选叶一茜</span>
                                                                                            <span class="strategy_desc">相信很多人都看到了微博上田亮叶一茜夫妇、胡夏、吴昕、李诞等人发了《集结吧！王者》的个人宣传海报，这档节目将在6月28日播出。他们将作为队长带领着各自的王者队伍进行魔鬼训练，冲击KPL冠军杯总决赛。</span>
                                                                                            <span class="strategy_num">868
                                                                                                <span class="ico_read_num"></span>
                                                                                            </span>
                                                                                            <span class="strategy_time">06-21</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=71493" class="strategy_pic">
                                                                                        <img src="http://shp.qpic.cn/cfwebcap/791243504/002502c42110f937c2dbf9693c37463e/0/" alt="【头像走一波】第98期：忍者赵云">
                                                                                    </a>
                                                                                    <div class="strategy_cont">
                                                                                        <a href="http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=71493">
                                                                                            <span class="strategy_title">【头像走一波】第98期：忍者赵云</span>
                                                                                            <span class="strategy_desc">快来围观萌萌哒Q版赵云头像吧~</span>
                                                                                            <span class="strategy_num">3406
                                                                                                <span class="ico_read_num"></span>
                                                                                            </span>
                                                                                            <span class="strategy_time">06-21</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                            <a href="javascript:void(0);" title="加载更多" class="i-more"></a>
                                                                        </div> -->
        <!--  精彩视频end -->
    </section>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js'
import Lunbotu from '../swiper/swiper.vue';

export default {
    components: {
        'v-swiper': Lunbotu
    },
    data() {
        return {
            items: [
                { src: './img/1.jpg', msg: '111' },
                { src: './img/2.jpg', msg: '222' },
                { src: './img/3.jpg', msg: '333' }
            ]
        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 5000
        })
    }
}
</script>

<style>
@import url("../../static/css/swiper.min.css");

/*素材*/

.ico_strategy,
.ico_news,
.ico_video,
.ico_more,
.ico_play,
.ico_read_num,
.v_infor .ico_video_num {
    display: inline-block;
    overflow: hidden;
    background: url(../../img/index.png) no-repeat;
    background-size: 4rem 4rem;
}

.ico_strategy {
    width: 0.26rem;
    height: 0.28rem;
    background-position: 0 -1.08rem;
}

.ico_news {
    width: 0.26rem;
    height: 0.26rem;
    background-position: 0 -0rem;
}

.ico_video {
    width: 0.26rem;
    height: 0.24rem;
    background-position: 0 -0.55rem;
}

.ico_more {
    width: 0.83rem;
    height: 0.34rem;
    background-position: 0 -1.66rem;
}

.ico_play {
    width: 0.59rem;
    height: 0.57rem;
    background-position: -0.54rem 0;
}

.ico_read_num {
    width: 0.24rem;
    height: 0.22rem;
    margin-left: 0.05rem;
    vertical-align: middle;
    background-position: -0.71rem -0.63rem;
}

.v_infor .ico_video_num {
    width: 0.23rem;
    height: 0.16rem;
    margin: 0.06rem 0.05rem 0 0.1rem;
    background-position: -0.72rem -0.93rem;
}

@-webkit-keyframes move {
    from {
        -webkit-transform: translate3d(0, 0, 0)
    }
    25% {
        -webkit-transform: translate3d(0, 5px, 0)
    }
    50% {
        -webkit-transform: translate3d(0, 0, 0)
    }
    75% {
        -webkit-transform: translate3d(0, -5px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@keyframes move {
    from {
        transform: translate3d(0, 0, 0)
    }
    25% {
        transform: translate3d(0, 5px, 0)
    }
    50% {
        transform: translate3d(0, 0, 0)
    }
    75% {
        transform: translate3d(0, -5px, 0)
    }
    to {
        transform: translate3d(0, 0, 0)
    }
}

























/*按钮导航区域*/

.home_nav {
    background-color: #f1f3f5;
}

.home_nav ul li a {
    display: block;
    width: 100%;
    height: 100%;
}

.home_nav ul li {
    position: relative;
    width: 25%;
    float: left;
    height: 1.2rem;
    text-align: center;
}

.home_nav ul li span {
    font-size: 0.24rem;
    color: #222;
    position: absolute;
    top: 0.8rem;
    left: 0;
    width: 100%;
    text-align: center;
    display: block;
}

.home_nav ul li i {
    position: absolute;
    top: 0;
    left: -1px;
    display: block;
    width: 100%;
    height: 100%;
    background: url(../../img/btn_list.png) no-repeat;
    background-size: 400% 200%;
    border-right: 1px solid #d4d9de;
    border-bottom: 1px solid #d4d9de;
}

.home_nav ul li a.hover i {
    background: url(../../img/btn_list_click.png) no-repeat;
    background-size: 400% 200%;
}

.home_nav ul li a.hover span {
    color: #71572f;
}

.home_nav ul li:nth-child(1) i {
    background-position: 0 0%
}

.home_nav ul li:nth-child(2) i {
    background-position: 33% 0%
}

.home_nav ul li:nth-child(3) i {
    background-position: 66% 0%;
    left: -3px;
}

.home_nav ul li:nth-child(4) i {
    background-position: 100% 0%
}

.home_nav ul li:nth-child(5) i {
    background-position: 0% 100%
}

.home_nav ul li:nth-child(6) i {
    background-position: 33% 100%
}

.home_nav ul li:nth-child(7) i {
    background-position: 66% 100%;
    left: -3px;
}

.home_nav ul li:nth-child(8) i {
    background-position: 100% 100%
}

.home_nav ul li:nth-child(1) a.hover i {
    background-position: 0 0%
}

.home_nav ul li:nth-child(2) a.hover i {
    background-position: 33% 0%
}

.home_nav ul li:nth-child(3) a.hover i {
    background-position: 66% 0%;
    left: -3px;
}

.home_nav ul li:nth-child(4) a.hover i {
    background-position: 100% 0%
}

.home_nav ul li:nth-child(5) a.hover i {
    background-position: 0% 100%
}

.home_nav ul li:nth-child(6) a.hover i {
    background-position: 33% 100%
}

.home_nav ul li:nth-child(7) a.hover i {
    background-position: 66% 100%;
    left: -3px;
}

.home_nav ul li:nth-child(8) a.hover i {
    background-position: 100% 100%
}

























/*资讯，视频，攻略模块*/

.index_cont {
    margin-top: 0.25rem;
    padding: 0 0.34rem;
    border-bottom: 1px solid #d4d9de;
}

.index_cont_title {
    zoom: 1;
    padding-left: 0.36rem;
    position: relative;
    height: 0.39rem;
    line-height: 0.39rem;
    overflow: hidden;
    margin-bottom: 0.24rem;
}

.ico_strategy,
.ico_news,
.ico_video {
    position: absolute;
    top: 50%;
    left: 0rem;
}

.ico_news {
    margin-top: -0.14rem;
}

.ico_video {
    margin-top: -0.13rem;
}

.ico_strategy {
    margin-top: -0.14rem;
}

.index_cont_title h3 {
    font-size: 0.32rem;
    color: #212222;
}

.index_cont_title .ico_more {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 99999px;
    overflow: hidden;
}

.news_list li {
    position: relative;
    height: 0.38rem;
    line-height: 0.38rem;
    margin-bottom: 0.3rem;
    font-size: 0.28rem;
}

.news_list li:hover {
    background: #e3e6ea;
    border-radius: 6px;
}

.news_list li:hover a {
    color: #8a9bc7;
}

.news_list li a {
    display: inline-block;
    width: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.index_cont a {
    color: #333333;
}

.index_cont .category {
    color: #464f73;
}

.index_cont .split {
    display: none;
    height: 0.38rem;
    display: inline-block;
    margin: 0 0.02rem;
}

.index_cont .title {
    width: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.index_cont .time {
    position: absolute;
    right: 0;
    color: #777777;
}

.video_list li {
    position: relative;
    width: 3.36rem;
    height: auto;
    float: left;
    margin: 0 0.1rem 0.25rem 0;
    font-size: 0.28rem;
}

.video_list li img {
    display: block;
    width: 3.36rem;
    height: 1.9rem;
    border-radius: 6px;
}

.video_list li .ico_play {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.48rem 0 0 -0.28rem;
}

.video_list li:nth-child(2n) {
    margin-right: 0;
}

.video_title {
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    margin-top: 0.18rem;
}

.v_infor {
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.18rem;
}

.v_infor span {
    display: block;
    width: 50%;
    float: left;
    overflow: hidden;
    height: 0.3rem;
}

.v_time {
    text-align: right;
}

.stategy_index_cont {
    border-bottom: 0 none;
}

.strategy_list li {
    margin-bottom: 0.3rem;
}

.strategy_pic {
    float: left;
    width: 1.07rem;
    height: 1.07rem;
    margin-right: 0.25rem;
}

.strategy_pic img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 6px;
}

.strategy_cont {
    float: left;
    position: relative;
    width: 5.50rem;
    height: 1.07rem;
    overflow: hidden;
}

.strategy_cont a {
    color: #a4abae;
    font-size: 0.24rem;
}

.strategy_title {
    width: 77%;
    display: block;
    color: #333;
    font-size: 0.28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.strategy_desc {
    display: block;
    width: 77%;
    margin-top: 0rem;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
}

.strategy_time {
    position: absolute;
    bottom: -2px;
    right: 0;
    color: #bdc2c5;
    font-size: 0.26rem;
}

.strategy_list li:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
}

.strategy_num {
    position: absolute;
    top: 2px;
    right: 0;
    color: #bdc2c5;
    font-size: 0.26rem;
}

























/*搜索模块*/

.search {
    position: relative;
    background: #f1f3f5;
    width: 6.82rem;
    height: 0.48rem;
    line-height: 0.48rem;
    margin: 0.17rem auto;
    border-radius: 5px;
}

.search input {
    width: 88%;
    height: 0.48rem;
    line-height: 0.48rem;
    border: 0;
    padding-left: 0.7rem;
    font-size: 0.22rem;
    background: #f1f3f5;
    color: #a4abae;
    position: absolute;
    top: 0px;
    left: 0px;
}

.search .okBtn {
    position: absolute;
    width: 0.28rem;
    height: 0.28rem;
    left: 5px;
    top: 5px;
    background: url(../../img/seach.png) no-repeat center;
    background-size: 0.28rem 0.28rem;
}
</style>
