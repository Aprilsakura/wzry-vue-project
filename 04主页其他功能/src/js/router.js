import VueRouter from 'vue-router';

import index from '../components/index/index.vue';
import heroList from '../components/index/nav/heroList.vue';
import activity from '../components/index/nav/activity.vue';

import match from '../components/match/match.vue';
import video from '../components/video/video.vue';
import strategy from '../components/strategy/strategy.vue';



export default new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: index },
        { path: '/index/heroList', component: heroList, name: 'heroL' },
        { path: '/index/activity', component: activity, name: 'activity' },

        { path: '/match', component: match },
        { path: '/video', component: video },
        { path: '/strategy', component: strategy }
    ],
    linkActiveClass: 'currentL'
})