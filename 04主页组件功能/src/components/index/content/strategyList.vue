<template>
    <ul class="strategy_list" id="index_str_list">
        <li v-for="(item,i) in list" :key='i'>
            <a :href="item.href" class="strategy_pic">
                <img :src="item.src">
            </a>
            <div class="strategy_cont">
                <a :href="item.href">
                    <span class="strategy_title">{{item.title}}</span>
                    <span class="strategy_desc">{{item.desc}}</span>
                    <span class="strategy_num">{{item.num}}
                        <span class="ico_read_num"></span>
                    </span>
                    <span class="strategy_time">{{item.time}}</span>
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
@import '../../../style/strategyList.less';
</style>
