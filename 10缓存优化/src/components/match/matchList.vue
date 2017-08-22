<template>
    <div>
        <div class="mc_allB mc_allB_news">赛事资讯</div>
        <div class="mc_gamemsg">
            <div class="marchLiCont">
                <div class="ac_tap mess_list newList_MarginTop">
                    <ul>
                        <li v-for='(item,i) in list' :key='i'>
                            <a :href="item.url">{{item.title}}</a>
                            <time>{{item.createDate}}</time>
                        </li>
                        <li v-once>
                            <h3 class="ac_move" data-pagenow="1" data-pagetotal="143" data-pagenext="/webplat/info/news_version3/15592/24418/24853/m16639/list_2.shtml">
                                上拉加载更多
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../../js/config.js';
import HTTP from '../../js/http.js';

export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getMList() {
            let url = config.getMatch;
            HTTP.get(url, body => {
                this.list = body.message
            })
        }
    },
    created() {
        this.getMList()
    }
}
</script>

<style lang='less'>
@import '../../style/matchList.less';
</style>
