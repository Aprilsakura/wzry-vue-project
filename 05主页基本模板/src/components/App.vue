<template>
    <div class="wrap">
        <!-- 底部导航start -->
        <div class="home_bottom">
            <nav class="clearfix">
                <router-link to='/home'>
                    <span>首页</span>
                </router-link>
                <router-link to='/video'>
                    <span>视频</span>
                </router-link>
                <router-link to='/strategy'>
                    <span>攻略</span>
                </router-link>
                <router-link to='/match'>
                    <span>赛事</span>
                </router-link>
            </nav>
        </div>
        <!-- 底部导航end -->
        <!-- 内容区域start -->
        <div class="content">
            <div class="home_top">
                <div class="logo_cont">
                    <a class="logo_img" href="/index.html">
                        <img src="../img/logo.png" alt="LOGO">
                    </a>
                    <div class="logo_title">
                        <h1>王者荣耀</h1>
                        <p>王者相见，打成一片</p>
                    </div>
                </div>
                <div class="download">
                    <a href="http://pvp.qq.com/m/m201606/play.shtml"></a>
                </div>
            </div>
            <router-view></router-view>
        </div>
        <!-- 内容区域end -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('../css/base.css');
</style>
