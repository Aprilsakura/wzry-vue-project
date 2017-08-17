<template>
    <section id="content_wrap">
        <!--英雄导航-->
        <div id="hero_nav" class="hero_nav">
            <ul class="clearfix types-ms">
                <li class="hero_current" data-type="0">
                    <a href="#">全部</a>
                </li>
                <li data-type="1">
                    <a href="#">战士</a>
                </li>
                <li data-type="2">
                    <a href="#">法师</a>
                </li>
                <li data-type="3">
                    <a href="#">坦克</a>
                </li>
                <li data-type="4">
                    <a href="#">刺客</a>
                </li>
                <li data-type="5">
                    <a href="#">射手</a>
                </li>
                <li data-type="6">
                    <a href="#">辅助</a>
                </li>
            </ul>
            <div class="clearfloat"></div>
        </div>
        <!--英雄列表-->
        <div class="hero_list">
            <ul class="herolist clearfix">
                <li>
                    <router-link :to="{ name:'heroD',params:{id:1} }">
                        <img src="http://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" width="91px" alt="干将莫邪">
                        <h3>花木兰</h3>
                    </router-link>
                </li>
                <li>
                    <a href="heroDeteail.html">
                        <img src="../../images/picture/154.jpg" alt="花木兰">
                        <h3>花木兰</h3>
                    </a>
                </li>
                <li>
                    <a href="heroDeteail.html">
                        <img src="../../images/picture/154.jpg" alt="花木兰">
                        <h3>花木兰</h3>
                    </a>
                </li>
                <li>
                    <a href="heroDeteail.html">
                        <img src="../../images/picture/154.jpg" alt="花木兰">
                        <h3>花木兰</h3>
                    </a>
                </li>
            </ul>
            <div class="clearfloat"></div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import '../../style/heroList.less';
</style>
