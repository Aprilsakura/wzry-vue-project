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
export default {
    props: [
        'list'
    ]
}
</script>

<style lang='less'>
@import '../../style/raiderList.less';
</style>
