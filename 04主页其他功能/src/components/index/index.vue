<template>
    <section class='index'>
        <v-swipe :swipeList="swipeList"></v-swipe>
        <!-- 主页导航start -->
        <v-homeNav></v-homeNav>
        <!-- 主页导航end -->
        <!--  热点资讯start -->
        <v-content v-for='(item,i) in contList' :key='i' :type='item'></v-content>
        <!--  热点资讯end -->
        <!--  精彩视频start -->
        <!-- <v-content :type='newsList'></v-content> -->
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
                                                                    </div> -->
        <!--  精彩视频end -->
        <!--  精品攻略start -->
        <!-- <v-content :type='newsList'></v-content> -->
        <!-- <div class="index_cont stategy_index_cont">
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
        <!-- 精品攻略end -->
    </section>
</template>

<script>
import iSwiper from '../swipe/swipe.vue';
import iHomeNav from './homeNav.vue';
import iContent from './homeCont.vue';

export default {
    data() {
        return {
            'swipeList': [
                { src: "http://ossweb-img.qq.com/upload/adw/image/1496806834/1496806834.jpg", msg: "王者猴教学" },
                { src: "http://ossweb-img.qq.com/upload/adw/image/1497856410/1497856410.jpg", msg: "KPL战报" },
                { src: "http://ossweb-img.qq.com/upload/adw/image/1497926134/1497926134.jpg", msg: "芈月英雄专题" }
            ],
            'contList': [
                { tab: 'news', msg: '热点资讯', href: 'http://pvp.qq.com/m/m201606/newsList.shtml' },
                { tab: 'video', msg: '精彩视频', href: 'http://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&tid=145262&e_code=pvpapp.targetId_0.r0' },
                { tab: 'strategy', msg: '精品攻略', href: 'http://pvp.qq.com/m/m201606/strategy.shtml' }
            ]
        }
    },
    components: {
        'v-swipe': iSwiper,
        'v-homeNav': iHomeNav,
        'v-content': iContent
    }
}
</script>

<style lang='less'>
@import '../../style/index.less';
</style>
