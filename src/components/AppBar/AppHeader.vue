<template>
    <div class="app-bar-wrap">
        <v-app-bar app absolute flat color="#2CA5B4" dark>
            <div class="icon-wrapper">
                <div class="icon-top">
                    <v-icon>mdi-lock-outline</v-icon>
                </div>
                <div class="icon-bottom">
                    <v-icon>mdi-lock-open-variant-outline</v-icon>
                </div>
            </div>
            <v-toolbar-title class="pl-5 font-weight-light"
                >Usermanagement</v-toolbar-title
            >
            <v-spacer></v-spacer>

            <div>
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-bottom="8"
                    offset-x
                    offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            light
                            fab
                            height="48"
                            width="48"
                            v-bind="attrs"
                            v-on="on"
                            class="mr-3"
                            elevation="1"
                        >
                            <span class="teal--text text-h6 font-weight-medium"
                                >JH</span
                            >
                        </v-btn>
                    </template>

                    <v-card elevation="0">
                        <v-list>
                            <v-list-item class="pb-3">
                                <v-list-item-avatar size="48">
                                    <v-avatar color="#2CA5B4" size="48">
                                        <span
                                            class="
                                                white--text
                                                text-h5 text-center
                                                font-weight-regular
                                            "
                                            >JH</span
                                        >
                                    </v-avatar>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title
                                        class="font-weight-medium"
                                        >Haller, Jan</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                        class="font-weight-regular"
                                        >Haller.jan@masterag.de</v-list-item-subtitle
                                    >
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                        <v-divider width="296px" class="ml-6"></v-divider>

                        <v-list>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-btn
                                        depressed
                                        plain
                                        small
                                        @click="logOut()"
                                    >
                                        <v-icon> mdi-logout </v-icon>
                                        <span class="pl-7 font-weight-medium"
                                            >log out</span
                                        >
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: "AppHeader",
    data: () => ({
        menu: false,
    }),
    methods: {
        logOut() {
            let logoutOptions = { redirectUri: "http://localhost:8080/" };
            Vue.$keycloak.logout(logoutOptions).then((success) => {
                    console.log("--> log: logout success ", success);
                })
                .catch((error) => {
                    console.log("--> log: logout error ", error);
                });
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
.app-bar-wrap {
    font-family: "Roboto", sans-serif;
    width: 100%;
    background-color: #2ca5b4;
    height: 64px;
}
.icon-wrapper {
    width: 37px;
    height: 30px;
    position: relative;
}
.icon-top {
    position: absolute;
    top: 0px;
    left: 0px;
}
.icon-bottom {
    position: absolute;
    top: 7px;
    left: 14px;
}
</style>