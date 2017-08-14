import VueRouter from 'vue-router';

import home from '../components/home/home.vue';
import match from '../components/match/match.vue';
import video from '../components/video/video.vue';
import strategy from '../components/strategy/strategy.vue';

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/match', component: match },
        { path: '/video', component: video },
        { path: '/strategy', component: strategy }
    ],
    linkActiveClass: 'currentL'
})