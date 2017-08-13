<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item,i) in items' :key='i'>
                <img :src='item.src'>
                <h2>{{item.msg}}</h2>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { src: '../src/img/1.jpg', msg: '111' },
                { src: '../src/img/2.jpg', msg: '222' },
                { src: '../src/img/3.jpg', msg: '333' }
            ]
        }
    }
    // props: ['items']
}
</script>

<style>
/*轮播图区域*/

.swiper-container {
    width: 100%;
    height: 3.3rem;
}

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
}

.swiper-slide img {
    height: 3.3rem;
}

.swiper-slide h2 {
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

.swiper-pagination {
    left: 30% !important;
}

.swiper-pagination-bullet {
    background-color: #fff !important;
}

.swiper-pagination-bullet-active {
    background: #4b67af !important;
}
</style>
