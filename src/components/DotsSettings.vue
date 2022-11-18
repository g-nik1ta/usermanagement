<template>
    <v-hover v-slot="{ hover }" class="mr-2" :style="{position: 'relative'}">
        <div>
            <v-card color="white" class="dots-window" v-if="hover" tile>
                <v-list dense>
                    <v-list-item-group>
                        <v-list-item
                            v-for="(item, index) in userSettingsWindow"
                            :key="index"
                            :class="index >= 3 ? 'mt-3' : 'mt-1'"
                        >
                            <v-list-item-icon class="ma-0 mr-3">
                                <v-icon :color="item.color" size="22px">
                                    {{ item.icon }}
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content class="font-weight-medium">
                                <v-list-item-title class="text-subtitle-2">
                                    {{ item.title }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
            <v-btn
                width="32px"
                height="32px"
                fab
                elevation="0"
                color="transparent"
                class="dots-btn"
                :class="{ 'on-hover': hover }"
            >
                <v-icon class="text-h5">mdi-dots-vertical</v-icon>
            </v-btn>
        </div>
    </v-hover>
</template>

<script>
export default {
    name: "DotsSettings",
    data: () => ({
        userSettingsWindow: [
            {
                icon: "mdi-square-edit-outline",
                title: "Edit",
                color: "#000",
            },
            {
                icon: "mdi-account-lock-open-outline",
                title: "Reset Password",
                color: "#000",
            },
            {
                icon: "mdi-account-cog-outline",
                title: "Roles",
                color: "#000",
            },
            {
                icon: "mdi-stop-circle-outline",
                title: "Disable user",
                color: "#D16A42",
            },
            {
                icon: "mdi-trash-can-outline",
                title: "Delete user",
                color: "#B43B2C",
            },
        ],
    }),
};
</script>

<style>
.dots-window {
    position: absolute;
    right: 30px;
    top: 0;
    z-index: 1;
    min-width: 260px;
}
</style>