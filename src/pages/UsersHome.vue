<template>
    <v-container class="pa-0 ma-0" fluid>
        <UsersHeader></UsersHeader>

        <v-divider></v-divider>

        <v-row no-gutters>
            <v-col class="pa-0" cols="3">
                <SearchInput></SearchInput>
                <UsersList></UsersList>
            </v-col>
            <v-col cols="9" class="d-flex justify-center align-center">
                <v-main class="pa-0 text-center" :style=" {maxWidth: 'fit-content'} ">
                    <v-img class="mr-10" :src="MyImg" width="300px" contain></v-img>
                    <v-card-title class="justify-center">Add a new user.</v-card-title>
                    <v-btn color="#2CA5B4" width="240px">
                        <v-icon color="white" size="20px">mdi-account-plus-outline</v-icon>
                        <v-list-item-title class="text-capitalize white--text">
                            Create User
                        </v-list-item-title>
                    </v-btn>
                </v-main>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import UsersHeader from "@/components/UsersHome/UsersHeader.vue";
import SearchInput from "@/components/UsersHome/SearchInput.vue";
import UsersList from "@/components/UsersHome/UsersList.vue";
export default {
    name: "UsersHome",
    data() {
        return {
            MyImg: require("@/assets/Gruppe_3987.svg"),
        };
    },
    components: {
        UsersHeader,
        SearchInput,
        UsersList,
    },
};
</script>

<style>
</style>