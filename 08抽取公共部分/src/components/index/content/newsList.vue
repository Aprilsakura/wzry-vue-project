<template>
    <ul class="news_list">
        <li v-for="(item,i) in list" :key='i'>
            <a :href="item.url">
                <span class="category">{{item.newstype}}</span>
                <span class="split">|</span>
                <span class="title">{{item.title}}</span>
                <span class="time">{{item.createDate}}</span>
            </a>
        </li>
    </ul>
</template>

<script>
import config from '../../../js/config.js'
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getNews() {
            let url = config.getHomeNews + '&pageSize=3';
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.list = body.message;
            })
        }
    },
    created() {
        this.getNews();
    }
}
</script>

<style lang='less'>
@import '../../../style/newsList.less';
</style>
