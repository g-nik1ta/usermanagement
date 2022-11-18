<template>
    <v-container class="pa-0 ma-0" fluid>
        <UsersHeader></UsersHeader>

        <v-divider></v-divider>

        <v-row no-gutters>
            <v-col class="pa-0" cols="3">
                <SearchInput @filterValue='filterUsers'></SearchInput>
                <UsersList :filterValue="filterValue"></UsersList>
            </v-col>
            <router-view></router-view>
        </v-row>
    </v-container>
</template>

<script>
import UsersHeader from "@/components/UsersHome/UsersHeader.vue";
import SearchInput from "@/components/UsersHome/SearchInput.vue";
import UsersList from "@/components/UsersHome/UsersList.vue";
export default {
    name: "UsersHome",
    data: () => ({
        filterValue: ''
    }),
    methods: {
        filterUsers(value) {
            this.filterValue = value;
        }
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