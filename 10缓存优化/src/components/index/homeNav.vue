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
import HTTP from '../../js/http.js';

export default {
    data() {
        return {
            navList: ''
        }
    },
    methods: {
        getHomeNav() {
            let url = config.getHomeNav;
            HTTP.get(url, body => {
               this.navList = body.message;
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
