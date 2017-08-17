<template>
    <section id="content_wrap">
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in swipeList" :key="i">
                    <img :src="item.src">
                    <h2>{{item.msg}}</h2>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 轮播图结束 -->
    </section>
</template>

<script>
import Swiper from 'swiper';
export default {
    props: [
        'swipeList'
    ],
    mounted() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 5000
        });
    }
}
</script>

<style lang='less'>
@import '../../static/css/swiper.min.css';
.swiper-container {
    width: 100%;
    height: 3.3rem;
    .swiper-wrapper {
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            img {
                height: 3.3rem;
            }
            h2 {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0.96rem;
                line-height: 0.96rem;
                background: rgba(0, 0, 0, .6);
                font-size: 0.36rem;
                color: #fff;
                text-align: left;
                padding-left: .1rem;
            }
        }
    }
    .swiper-pagination {
        left: 30% !important;
    }
}
</style>
