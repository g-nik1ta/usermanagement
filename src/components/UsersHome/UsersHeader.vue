<template>
    <div class="white d-flex justify-space-between align-center py-1 px-4">
        <v-card-title class="text-h5"> Users </v-card-title>
        <v-btn 
            width="42px" 
            height="42px" 
            class="mr-4" 
            fab
            @click="$router.push({name: 'createUserLayout'})"
        >
            <v-icon class="text-h4" color="#2CA5B4">mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "UsersHeader",
};
</script>

<style>
</style>