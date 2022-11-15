<template>
    <span>
        <AppHeader></AppHeader>
        <AppNavigation></AppNavigation>
    </span>
</template>

<script>
import AppHeader from '@/components/AppBar/AppHeader.vue'
import AppNavigation from '@/components/AppBar/AppNavigation.vue'
export default {
    name: "AppBar",
    components: {
        AppHeader,
        AppNavigation,
    }
};
</script>

<style>
</style>