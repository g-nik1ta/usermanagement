<template>
    <v-container class="pa-0" fluid>
        <CreateUserHeader></CreateUserHeader>

        <v-divider></v-divider>

        <CreateUser></CreateUser>
    </v-container>
</template>

<script>
import CreateUserHeader from "@/components/CreateUser/CreateUserHeader";
import CreateUser from "@/components/CreateUser/CreateUser";

export default {
    name: "CreateUserLayout",
    components: {
        CreateUserHeader,
        CreateUser,
    },
};
</script>

<style>
</style>