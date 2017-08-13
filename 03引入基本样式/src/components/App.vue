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
@charset "utf-8";













/* CSS Document */


/* ---------- Responsive accurate ---------- */

@media (min-width:640px) {
    html {
        font-size: 24px;
    }
}

@media (min-width:631px) and (max-width:639px) {
    html {
        font-size: 23.66px;
    }
}

@media (min-width:622px) and (max-width:630px) {
    html {
        font-size: 23.33px;
    }
}

@media (min-width:613px) and (max-width:621px) {
    html {
        font-size: 23px;
    }
}

@media (min-width:604px) and (max-width:612px) {
    html {
        font-size: 22.66px;
    }
}

@media (min-width:595px) and (max-width:603px) {
    html {
        font-size: 22.33px;
    }
}

@media (min-width:586px) and (max-width:594px) {
    html {
        font-size: 22px;
    }
}

@media (min-width:577px) and (max-width:585px) {
    html {
        font-size: 21.66px;
    }
}

@media (min-width:568px) and (max-width:576px) {
    html {
        font-size: 21.33px;
    }
}

@media (min-width:559px) and (max-width:567px) {
    html {
        font-size: 21px;
    }
}

@media (min-width:550px) and (max-width:558px) {
    html {
        font-size: 20.66px;
    }
}

@media (min-width:541px) and (max-width:549px) {
    html {
        font-size: 20.33px;
    }
}

@media (min-width:533px) and (max-width:540px) {
    html {
        font-size: 20px;
    }
}

@media (min-width:524px) and (max-width:532px) {
    html {
        font-size: 19.66px;
    }
}

@media (min-width:515px) and (max-width:523px) {
    html {
        font-size: 19.33px;
    }
}

@media (min-width:506px) and (max-width:514px) {
    html {
        font-size: 19px;
    }
}

@media (min-width:497px) and (max-width:505px) {
    html {
        font-size: 18.66px;
    }
}

@media (min-width:488px) and (max-width:496px) {
    html {
        font-size: 18.33px;
    }
}

@media (min-width:480px) and (max-width:487px) {
    html {
        font-size: 18px;
    }
}

@media (min-width:471px) and (max-width:479px) {
    html {
        font-size: 17.66px;
    }
}

@media (min-width:462px) and (max-width:470px) {
    html {
        font-size: 17.33px;
    }
}

@media (min-width:453px) and (max-width:461px) {
    html {
        font-size: 17px;
    }
}

@media (min-width:444px) and (max-width:452px) {
    html {
        font-size: 16.66px;
    }
}

@media (min-width:435px) and (max-width:443px) {
    html {
        font-size: 16.33px;
    }
}

@media (min-width:426px) and (max-width:434px) {
    html {
        font-size: 16px;
    }
}

@media (min-width:417px) and (max-width:425px) {
    html {
        font-size: 15.66px;
    }
}

@media (min-width:408px) and (max-width:416px) {
    html {
        font-size: 15.33px;
    }
}

@media (min-width:400px) and (max-width:407px) {
    html {
        font-size: 15px;
    }
}

@media (min-width:391px) and (max-width:399px) {
    html {
        font-size: 14.66px;
    }
}

@media (min-width:382px) and (max-width:390px) {
    html {
        font-size: 14.33px;
    }
}

@media (min-width:374px) and (max-width:381px) {
    html {
        font-size: 14px;
    }
}

@media (min-width:365px) and (max-width:373px) {
    html {
        font-size: 13.66px;
    }
}

@media (min-width:356px) and (max-width:364px) {
    html {
        font-size: 13.33px;
    }
}

@media (min-width:347px) and (max-width:355px) {
    html {
        font-size: 13px;
    }
}

@media (min-width:338px) and (max-width:346px) {
    html {
        font-size: 12.66px;
    }
}

@media (min-width:329px) and (max-width:337px) {
    html {
        font-size: 12.44px;
    }
}

@media (max-width:328px) {
    html {
        font-size: 12px;
    }
}







/* ---------- init ---------- */

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    margin: 0;
    padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
    word-wrap: break-word;
}

body,
button,
input,
select,
textarea {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, '\5FAE\8F6F\96C5\9ED1', sans-serif;
    font-size: 1rem;
    color: #000;
}

th {
    text-align: inherit;
}

ol,
ul {
    list-style: none;
}

fieldset,
img {
    border: 0;
    vertical-align: middle;
}

caption,
th {
    text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: 500;
}

sup {
    vertical-align: text-top;
}

sub {
    vertical-align: text-bottom;
}

ins,
a {
    color: #000;
    text-decoration: none;
}

a,
img {
    -webkit-touch-callout: none;
}

table {
    border-collapse: collapse;
}

i {
    font-style: normal;
}

* {
    padding: 0;
    margin: 0;
}

.clearfix {
    *zoom: 1
}

.clearfix:after {
    content: '\20';
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both
}

body {
    min-width: 320px;
    height: 100%;
    width: 100%;
    background: #F1F1F1;
}

img {
    width: 100%;
    display: block
}

.clearfloat {
    clear: both;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.content {
    padding-bottom: 1.2rem;
    padding-top: 45px;
    overflow: hidden;
    overflow-y: auto;
}


/*top*/

.home_top {
    margin: 0 auto;
    background: url(../img/hd.jpg) no-repeat 50% 0;
    left: 0;
    top: 0;
    height: 45px;
    width: 100%;
    background-size: 100% 45px;
    font-size: 0;
    z-index: 10;
    position: fixed
}

.logo_cont {
    position: absolute;
    width: 150px;
    height: 30px;
    top: 8px;
    left: 17px;
    padding-left: 40px;
}

.logo_img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 30px;
    height: 30px;
}

.logo_img img {
    width: 100%;
    height: 100%;
    display: block;
}

.logo_title {}

.logo_title h1 {
    font-size: 12px;
    line-height: 17px;
    color: #ffffff;
}

.logo_title p {
    font-size: 11px;
    color: #7e859e;
}

.home_top .download {
    position: absolute;
    width: 87px;
    height: 30px;
    top: 8px;
    right: 16px
}

.home_top .download a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(../img/down.png) no-repeat center 0;
    background-size: 87px 30px;
}


/*页脚*/

.home_bottom {
    background: url(../img/navnew11.png) no-repeat 50% 0;
    left: 0;
    top: auto;
    height: 0.87rem;
    width: 100%;
    bottom: 0;
    background-size: 100% auto;
    font-size: 0;
    z-index: 10;
    position: fixed;
}

.home_bottom span {
    width: 100%;
    text-indent: -9999px;
    overflow: hidden;
    height: 100%;
    display: inline-block;
}

.home_bottom nav {
    height: 100%;
}

.home_bottom nav a {
    width: 25%;
    height: 0.87rem;
    float: left;
}

.currentL {
    background: url(../img/navnew2.png) no-repeat 50% 0;
    background-size: 400% auto;
}

.home_bottom nav a:nth-child(1).currentL {
    background-position: 0 50%
}

.home_bottom nav a:nth-child(2).currentL {
    background-position: 33.5% 49%
}

.home_bottom nav a:nth-child(3).currentL {
    background-position: 67% 49%
}

.home_bottom nav a:nth-child(4).currentL {
    background-position: 100% 49%
}

@-webkit-keyframes maskAni {
    0% {
        -webkit-transform: rotate(-90deg);
    }
    30% {
        -webkit-transform: rotate(-90deg);
    }
    70% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
    }
}
</style>
