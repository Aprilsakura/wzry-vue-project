<template>
    <div id="videoNav" class="video_nav">
        <ul>
            <li v-for='(item,i) in list' :key='i' @click='tabClick(item.vtype)' :class='isCurrent(item.vtype)'>
                <a href="javascript:;">{{item.vtype}}</a>
                <span class="video_nbg"></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            'current': ''
        }
    },
    props: [
        'list'
    ],
    methods: {
        isCurrent(type) {
            let current = this.current = (this.current == '') ? this.list[0].vtype : this.current;
            switch (type) {
                case current:
                    return 'video_current'
                default:
                    break;
            }
        },
        tabClick(type) {
            this.current = type;
        }
    },
    watch: {
        current() {
            this.$emit('getVList', this.current)
        }
    }
}
</script>

<style lang='less'>
@import '../../style/videoNav.less';
</style>
