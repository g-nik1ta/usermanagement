<template>
    <v-toolbar>
        <v-col cols="8" class="px-0">
            <v-text-field
                label="Search"
                v-model="search"
                @input="onChange()"
                single-line
                hide-details
                outlined
                dense
            ></v-text-field>
        </v-col>
        <v-btn 
            class="arrow-btn" 
            width="32px" 
            height="32px" 
            @click="$router.push({name: 'usersFullListLayout' })" fab>
            <v-icon class="text-h4">mdi-chevron-right</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name: 'SearchInput',
    data: () => ({
        search: '',
    }),
    methods: {
        onChange() {
            this.$emit('filterValue', this.search)
        }
    }
};
</script>

<style>
.arrow-btn {
    position: absolute;
    right: 0;
    transform: translateX(40%);
}
</style>