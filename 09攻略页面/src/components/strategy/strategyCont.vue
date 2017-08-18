<template>
    <div>
        <v-sNav :list='navList' @getVList='getStategyList'></v-sNav>
        <div class="index_cont">
            <v-sList :list='stategyList'></v-sList>
        </div>
    </div>
</template>

<script>
import config from '../../js/config.js';
import sNav from '../common/vNav.vue';
import sList from '../common/raiderList.vue';

export default {
    data() {
        return {
            navList: [
                { vtype: '最新' },
                { vtype: '新人' },
                { vtype: '英雄' },
                { vtype: '官方' },
                { vtype: '同人' }
            ],
            stategyList: []
        }
    },
    components: {
        'v-sNav': sNav,
        'v-sList': sList
    },
    methods: {
        getStategyList() {
            let url = config.getStategy + '?type=' + arguments[0];
            console.log(url);
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) this.stategyList = body.message;
            });
        }
    }
}
</script>

<style>

</style>
