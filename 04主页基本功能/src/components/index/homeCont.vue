<template>
    <div class="index_cont">
        <div class="index_cont_title">
            <span :class='"ico_"+type.tab'></span>
            <h3>{{type.msg}}</h3>
            <a :href="type.href" class="ico_more">more</a>
        </div>
        <component :is='getList(type.tab)' :list="this[type.tab]"></component>
    </div>
</template>

<script>

import newsList from '../index/content/newsList.vue'
import videoList from '../index/content/videoList.vue';
import strategyList from '../index/content/strategyList.vue';

export default {
    data() {
        return {
            'news': [
                {
                    href: 'http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24988/m15626/201706/598754.shtml',
                    category: '新闻',
                    title: '妲己情报站——新版本大爆料！社交优化抢先看',
                    time: '06/21'
                },
                {
                    href: 'http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24991/m15626/201706/598476.shtml',
                    category: '赛事',
                    title: 'KPL每周话题：四强出炉，谁主沉浮？',
                    time: '06/21'
                },
                {
                    href: 'http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24988/m15626/201706/598754.shtml',
                    category: '公告',
                    title: '6月20日全服不停机更新公告',
                    time: '06/20'
                }
            ],
            'video': [
                {
                    msg: "《王者职业教学》第43期：老王无解英雄铠，完美控伤残血反杀！",
                    src: "http://itea-cdn.qq.com/file/tgl/20170809/212x127.1502266613.14b80015009de88011aeb6103334c88e.jpg"
                },
                {
                    msg: "小光头达摩醉拳无双，入侵高地嚣张拿三杀",
                    src: "http://itea-cdn.qq.com/file/tgl/20170816/1502851404.5d3215d710060de88c17a9dc5bac3884.jpg"
                }
            ],
            'strategy': [
                {
                    href: "http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=91224",
                    src: "http://shp.qpic.cn/cfwebcap/791243504/e3e56dcf4af1719a7ce28c3ada5cee80/0/",
                    title: "KPL每周话题：四强出炉，谁主沉浮？",
                    desc: "KPL每周话题：四强出炉，谁主沉浮？",
                    num: 947,
                    time: "06-21"
                },
                {
                    href: "http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=91225",
                    src: "http://shp.qpic.cn/cfwebcap/791243504/7aee94e5b242b6ecd846df874764945c/0/",
                    title: "《集结吧！王者》分组曝光，田亮秒选叶一茜",
                    desc: "相信很多人都看到了微博上田亮叶一茜夫妇、胡夏、吴昕、李诞等人发了《集结吧！王者》的个人宣传海报，这档节目将在6月28日播出。他们将作为队长带领着各自的王者队伍进行魔鬼训练，冲击KPL冠军杯总决赛。",
                    num: 868,
                    time: "06-21"
                },
                {
                    href: "http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&tid=71493",
                    src: "http://shp.qpic.cn/cfwebcap/791243504/002502c42110f937c2dbf9693c37463e/0/",
                    title: "快来围观萌萌哒Q版赵云头像吧~",
                    desc: "【头像走一波】第98期：忍者赵云",
                    num: 3406,
                    time: "06-21"
                }
            ]
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
                    return strategyList;
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