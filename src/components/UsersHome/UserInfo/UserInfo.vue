<template>
    <v-col cols="9" class="pt-2 pr-8 pl-6">
        <v-subheader class="px-0" :style="{height: 'fit-content'}">
            <span
                @click="$router.push({ name: 'userContactInfo' }); btnFlag = true"
                class="text-subtitle-1 font-weight-medium  mr-12"
                :style="[btnFlag ? {color: '#2CA5B4', cursor: 'pointer', borderBottom: '3px solid #2CA5B4'} : {color: '#888888', cursor: 'pointer'}]"
                >
                Information</span>
            
            <span
                @click="$router.push({ name: 'userRolesInfo', path: '/roles' }); btnFlag = false"
                class="text-subtitle-1 font-weight-medium  mx-16"
                :style="[!btnFlag ? {color: '#2CA5B4', cursor: 'pointer', borderBottom: '3px solid #2CA5B4'} : {color: '#888888', cursor: 'pointer'}]"
                >
                Userroles</span>
        </v-subheader>

        <router-view></router-view>
    </v-col>
</template>

<script>
export default {
    name: "UserInfo",
    created() {
        if(this.$route.path.split('/').slice(-1) == 'roles-info') this.btnFlag = !this.btnFlag;
    },
    watch: {
        async $route() {
            if(this.$route.path.split('/').slice(-1) == 'general-info') this.btnFlag = true;
        },
    },
    data: () => ({
        btnFlag: true,
    }),
};
</script>

<style>
</style>