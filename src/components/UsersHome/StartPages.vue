<template>
    <v-col cols="9" class="d-flex justify-center align-center">
        <v-main class="pa-0 text-center" :style="{ maxWidth: 'fit-content' }">
            <v-img class="mr-10" :src="MyImg" width="300px" contain></v-img>
            <v-card-title class="justify-center">Add a new user.</v-card-title>
            <v-btn 
                color="#2CA5B4" 
                width="240px" 
                @click="$router.push({name: 'createUserLayout'})">
                <v-icon color="white" size="20px"
                    >mdi-account-plus-outline</v-icon
                >
                <v-list-item-title class="text-capitalize white--text">
                    Create User
                </v-list-item-title>
            </v-btn>
        </v-main>
    </v-col>
</template>

<script>
export default {
    name: "StartPages",
    data() {
        return {
            MyImg: require("@/assets/Gruppe_3987.svg"),
        };
    },
};
</script>

<style>
</style>