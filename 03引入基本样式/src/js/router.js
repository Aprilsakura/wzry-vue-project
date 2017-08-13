import VueRouter from 'vue-router';

import home from '../components/pages/home.vue';
import match from '../components/pages/match.vue';
import video from '../components/pages/video.vue';
import strategy from '../components/pages/strategy.vue';

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