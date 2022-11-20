<template>
    <v-container class="pa-0 ma-0" fluid>
        <UsersHeader></UsersHeader>

        <v-divider></v-divider>

        <v-card class="pt-6 mr-10">
            <UsersFilter
                @filterValue="filterUsers"
                @filterRolesValue="filterRolesUsers"
            ></UsersFilter>
            <UsersFullList
                :filterValue="filterValue"
                :filterRolesValue="filterRolesValue"
                :rolesFilters="rolesFilters"
            ></UsersFullList>
        </v-card>
    </v-container>
</template>

<script>
import UsersHeader from "@/components/UsersHome/UsersHeader";
import UsersFilter from "@/components/UsersFullList/UsersFilter";
import UsersFullList from "@/components/UsersFullList/UsersFullList";

export default {
    name: "UsersFullListLayout",
    data: () => ({
        filterValue: "",
        filterRolesValue: "",
        rolesFilters: "",
    }),
    methods: {
        filterUsers(value) {
            this.filterValue = value;
        },
        filterRolesUsers(value, rolesFilters) {
            this.filterRolesValue = value.join("");
            this.rolesFilters = rolesFilters.join("").split(" ").join("");
        },
    },
    components: {
        UsersHeader,
        UsersFilter,
        UsersFullList,
    },
};
</script>

<style>
.arrow-btn {
    position: absolute;
    right: 0;
    transform: translateX(40%);
}
</style>