<template>
    <div class="wrap">
        <v-homeTop> </v-homeTop>
        <router-view></router-view>
        <v-homeBottom> </v-homeBottom>
    </div>
</template>

<script>
import homeTop from './home/homeTop.vue';
import homeBottom from './home/homeBottom.vue';
export default {
    components: {
        'v-homeTop': homeTop,
        'v-homeBottom': homeBottom
    }
}
</script>

<style lang='less'>
@import '../style/base.less';
</style>
