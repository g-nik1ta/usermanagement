<template>
    <div class="white d-flex align-center py-1 px-4">
        <v-btn 
            width="42px" 
            height="42px" 
            class="mr-1" 
            fab
            @click="$router.push({name: 'startPages'})"
        >
            <v-icon class="text-h4" color="#2CA5B4">mdi-arrow-left</v-icon>
        </v-btn>
        <v-card-title class="text-h5"> Create User </v-card-title>
    </div>
</template>

<script>
export default {
    name: "CreateUserHeader"
}
</script>

<style>

</style>