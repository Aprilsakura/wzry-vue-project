<template>
    <div class="wrap">
        <!-- 底部导航start -->
        <v-footer></v-footer>
        <!-- 底部导航end -->
        <!-- 内容区域start -->
        <div class="content">
            <v-header></v-header>
            <router-view></router-view>
        </div>
        <!-- 内容区域end -->
    </div>
</template>

<script>
import Footer from './base/footer.vue'
import Header from './base/header.vue'

export default {
    components: {
        'v-header': Header,
        'v-footer': Footer
    }
}
</script>

<style>
@import url('../css/base.css');
</style>
