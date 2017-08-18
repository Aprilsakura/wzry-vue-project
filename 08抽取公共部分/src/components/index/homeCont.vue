<template>
    <div class="index_cont">
        <div class="index_cont_title">
            <span :class='"ico_"+type.tab'></span>
            <h3>{{type.msg}}</h3>
            <a :href="type.href" class="ico_more">more</a>
        </div>
        <component :is='getList(type.tab)' :list='matchList'></component>
    </div>
</template>

<script>
import config from '../../js/config.js'
import newsList from './content/newsList.vue'
import videoList from './content/videoList.vue';
import raiderList from '../common/raiderList.vue';

export default {
    data() {
        return {
            matchList: []
        }
    },
    methods: {
        getList(tab) {
            switch (tab) {
                case 'news':
                    return newsList;
                case 'video':
                    return videoList;
                case 'strategy':
                    return raiderList;
                default:
                    break;
            }
        },
        getRaider() {
            let url = config.getHomeRaiders;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.matchList = body.message;
            })
        }
    },
    props: [
        'type'
    ],
    created() {
        this.getRaider();
    }
}
</script>

<style lang='less'>
@import '../../style/homeCont.less';
</style>