<template>
    <div class="home_nav clearfix">
        <ul>
            <li>
                <router-link :to="{ name:'heroList' }">
                    <i class="icon_1"></i>
                    <span>英雄介绍</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name:'activity' }">
                    <i></i>
                    <span>活 动</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name:'match' }">
                    <i></i>
                    <span>赛 事</span>
                </router-link>
            </li>
            <li>
                <a href="http://pvp.qq.com/cp/a20161116tyf/page01.htm">
                    <i></i>
                    <span>体验服</span>
                </a>
            </li>
            <li>
                <router-link :to="{ name:'newsList' }">
                    <i></i>
                    <span>资 讯</span>
                </router-link>
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
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import '../../style/homeNav.less';
</style>
