<template>
    <div>
        <div class="home_bottom">
            <nav class="clearfix">
                <router-link to="/index">
                    <span>首页</span>
                </router-link>
                <router-link to="/video">
                    <span>视频</span>
                </router-link>
                <router-link to="/strategy">
                    <span>攻略</span>
                </router-link>
                <router-link to="/match">
                    <span>赛事</span>
                </router-link>
            </nav>
        </div>
        <div class="bottomDV"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import '../../style/homeBottom.less';
</style>
