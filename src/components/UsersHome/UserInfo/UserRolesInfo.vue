<template>
    <v-card elevation="1" class="white my-3">
        <v-row class="mx-0">
            <v-col cols="4" class="pt-5 pl-4 mb-1">
                <v-list-item-title
                    class="font-weight-bold text-body-2"
                    :style="{ color: '#9E9E9E' }"
                >
                    Name
                </v-list-item-title>
            </v-col>
            <v-col cols="8" class="pt-5 pl-4 mb-1">
                <v-list-item-title
                    class="font-weight-bold text-body-2"
                    :style="{ color: '#9E9E9E' }"
                >
                    Systems & Aplications
                </v-list-item-title>
            </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row
            class="ma-0 d-flex flex-column"
            v-for="(userRole, index) in user.userRole"
            :key="index"
        >
            <v-list class="d-flex pa-0">
                <v-col cols="4" class="pt-5 pl-4 mb-1">
                    <v-list-item-group class="d-flex">
                        <v-list-item-avatar class="ma-0 mr-4" size="48">
                            <v-avatar size="48" color="rgba(44, 165, 180, 0.4)">
                                <v-icon class="text-h4" color="#2CA5B4"
                                    >mdi-lock-pattern</v-icon
                                >
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-title
                            class="font-weight-bold text-subtitle-1 black--text"
                            :style="{ color: '#9E9E9E' }"
                        >
                            {{ userRole.name === null ? 'null' : userRole.name }}
                        </v-list-item-title>
                    </v-list-item-group>
                </v-col>
                <v-col :style="{position: 'relative'}" cols="8" class="pt-5 pl-4 pr-0 mb-1 d-flex align-center">
                    <v-list-item-title
                        class="font-weight-regular text-subtitle-1 black--text"
                        :style="{ color: '#9E9E9E' }"
                    >
                        {{ userRole.systemsAplications }}
                    </v-list-item-title>
                    <v-hover v-slot="{ hover }" :style="{position: 'relative'}">
                        <div>
                            <v-card
                                color="white"
                                class="roles-dots-window py-1"
                                v-if="hover"
                                tile
                            >
                                <v-list-item-group>
                                    <v-list-item>
                                        <v-list-item-icon class="ma-0 mr-3 mt-1">
                                            <v-icon>
                                                mdi-account-minus-outline
                                            </v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title
                                                class="
                                                    text-subtitle-1
                                                    font-weight-medium
                                                "
                                            >
                                                Revoke user role
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
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
                                <v-icon class="text-h5"
                                    >mdi-dots-vertical</v-icon
                                >
                            </v-btn>
                        </div>
                    </v-hover>
                </v-col>
            </v-list>

            <v-divider></v-divider>
        </v-row>
    </v-card>
</template>

<script> 
export default {
    name: "UserRolesInfo",
    data: () => ({
        user: {
            createdOn: '',
            email: '',
            enabled: '',
            firstName: '',
            id: '',
            lastName: '',
            userName: '',
        },
    }),
    beforeCreate() {
        setTimeout(() => {
            const allUser = this.$store.getters.getAllUsers;
            const routeId = this.$route.params.id;

            this.user = allUser.find(function (elem) {
                if (elem.id == routeId) {
                    return elem;
                }
                return false
            })
        }, 1000);
    },
    watch: {
        async $route() {
            const allUser = this.$store.getters.getAllUsers;
            const routeId = this.$route.params.id;

            this.user = allUser.find(function (elem) {
                if (elem.id == routeId) {
                    return elem;
                }
                return false
            })
        },
    }, 
};
</script>

<style>
.roles-dots-window {
    position: absolute;
    top: 0;
    right: 30px;
    z-index: 1;
    min-width: 260px;
}
</style>