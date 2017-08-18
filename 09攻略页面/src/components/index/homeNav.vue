<template>
    <div class="home_nav clearfix">
        <ul>
            <li v-for='(item,i) in navList' :key='item.ID'>
                <a :href='item.navUrl'>
                    <i class="icon_1"></i>
                    <span>{{item.navTitle}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import config from '../../js/config.js';
export default {
    data() {
        return {
            navList: ''
        }
    },
    methods: {
        getHomeNav() {
            let url = config.getHomeNav;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.navList = body.message;
            })
        }
    },
    created() {
        this.getHomeNav();
    }
}
</script>

<style lang='less'>
@import '../../style/homeNav.less';
</style>
