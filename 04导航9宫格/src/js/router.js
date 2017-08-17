import VueRouter from 'vue-router';

import index from '../components/index/index.vue';
import match from '../components/match/match.vue';
import video from '../components/video/video.vue';
import strategy from '../components/strategy/strategy.vue';

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: index },
        { path: '/match', component: match },
        { path: '/video', component: video },
        { path: '/strategy', component: strategy }
    ],
    linkActiveClass: 'currentL'
})