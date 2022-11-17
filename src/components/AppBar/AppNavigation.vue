<template>
    <v-navigation-drawer
        app
        clipped
        color="#E8E8E8"
        mini-variant
        mini-variant-width="72px"
    >
        <v-list class="pa-0">
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                color="#2CA5B4"
                :to="item.url"
                width="100%"
                class="px-3"
            >
                <v-list-item-icon>
                    <v-icon class="text-h4" color="#2CA5B4">{{
                        item.icon
                    }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "AppNavigation",
    data: () => ({
        items: [
            { icon: "mdi-account-lock-open-outline", url: "/" },
            { icon: "mdi-lock-open-variant-outline", url: "/roles-details" },
            { icon: "mdi-lock-pattern", url: "/systems" },
        ],
    }),
};
</script>

<style>
.v-list-item__icon {
    height: 40px !important;
}
</style>