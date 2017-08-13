import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

import main from './main.js';
main.device();

import App from '../components/App.vue';
import router from './router.js';
import Swiper from 'swiper';

new Vue({
    el: '#app',
    render: c => c(App),
    router
})
