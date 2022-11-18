<template>
    <v-row no-gutters class="pl-8 pr-4 ">
        <v-col cols="3" class="pr-8">
            <v-text-field
                label="Search"
                single-line
                hide-details
                outlined
                dense
            ></v-text-field>
        </v-col>
        <v-col cols="3" class="pr-8">
            <v-text-field
                label="State"
                single-line
                hide-details
                outlined
                dense
            ></v-text-field>
        </v-col>
        <v-btn
            class="arrow-btn"
            width="40px"
            height="40px"
            @click="$router.push({ name: 'createUser' })"
            fab
        >
            <v-icon class="text-h4">mdi-chevron-left</v-icon>
        </v-btn>
    </v-row>
</template>

<script>
export default {
    name: "UsersFilter",
};
</script>

<style>
</style>