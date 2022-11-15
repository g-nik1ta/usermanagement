<template>
    <v-app>
        <AppBar></AppBar>
        <v-main class="pt-0">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue"
export default {
    components: {
        AppBar
    }
}
</script>

<style lang="scss">
.v-application {
    background-color: #f0f0f0 !important;
}
</style>
