<template>
    <ul class="news_list">
        <li v-for="(item,i) in list" :key='i'>
            <a :href="item.href">
                <span class="category">{{item.category}}</span>
                <span class="split">|</span>
                <span class="title">{{item.title}}</span>
                <span class="time">{{item.time}}</span>
            </a>
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
@import '../../../style/newsList.less';
</style>
