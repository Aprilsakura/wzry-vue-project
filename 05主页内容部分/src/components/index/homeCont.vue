<template>
    <div class="index_cont">
        <div class="index_cont_title">
            <span :class='"ico_"+type.tab'></span>
            <h3>{{type.msg}}</h3>
            <a :href="type.href" class="ico_more">more</a>
        </div>
        <component :is='getList(type.tab)'></component>
    </div>
</template>

<script>
import newsList from './content/newsList.vue'
import videoList from './content/videoList.vue';
import raiderList from './content/raiderList.vue';

export default {
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
        }
    },
    props: [
        'type'
    ]
}
</script>

<style lang='less'>
@import '../../style/homeCont.less';
</style>