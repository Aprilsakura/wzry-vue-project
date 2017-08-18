<template>
    <ul class="strategy_list" id="index_str_list">
        <li v-for="item in list" :key='item.ID'>
            <a :href="item.url" class="strategy_pic">
                <img :src="item.img">
            </a>
            <div class="strategy_cont">
                <a :href="item.url">
                    <span class="strategy_title">{{item.title}}</span>
                    <span class="strategy_desc">{{item.summary}}</span>
                    <span class="strategy_num">{{item.num}}
                        <span class="ico_read_num"></span>
                    </span>
                    <span class="strategy_time">{{item.gdate}}</span>
                </a>
            </div>
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
        getRaider() {
            let url = config.getRaiders;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.list = body.message;
            })
        }
    },
    created() {
        this.getRaider();
    }
}
</script>

<style lang='less'>
@import '../../../style/raiderList.less';
</style>
