<template>
    <v-card elevation="1" class="white px-12 pb-14 my-3">
        <v-row class="py-6">
            <v-col cols="6">
                <v-list-item-group class="d-flex">
                    <v-list-item-avatar class="ma-0" size="86">
                        <v-avatar size="86" color="rgba(44, 165, 180, 0.4)">
                            <span
                                :style="{ color: '#2CA5B4' }"
                                class="
                                    text-h4 text-center
                                    font-weight-bold
                                    text-uppercase
                                "
                            >
                                {{
                                    AddUserAvatar(
                                        user.firstName,
                                        user.lastName,
                                        user.email
                                    )
                                }}
                            </span>
                        </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-8">
                        <v-list-item-subtitle
                            class="
                                blue-grey--text
                                font-weight-medium
                                text-subtitle-1
                                mb-n1
                            "
                            >Name</v-list-item-subtitle
                        >
                        <v-list-item-title class="font-weight-medium text-h6">
                            {{
                                getFullName(
                                    user.firstName,
                                    user.lastName,
                                    user.email
                                ).replace(/,/g, "")
                            }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item-group>
            </v-col>
            <v-col cols="6">
                <v-list-item-group class="d-flex float-right">
                    <v-list-item-title
                        class="
                            font-weight-regular
                            text-subtitle-1
                            white--text
                            pr-5
                            rounded-pill
                        "
                        :class="[
                            user.enabled ? 'blue-grey' : 'red',
                            user.enabled ? 'lighten-1' : 'darken-3',
                        ]"
                    >
                        <v-icon color="white" class="pr-1 pl-3" size="20px">{{
                            user.enabled ? "mdi-check" : "mdi-close"
                        }}</v-icon>
                        {{
                            user.enabled ? "Is active" : "Is not active"
                        }}</v-list-item-title
                    >
                    <DotsSettings></DotsSettings>
                </v-list-item-group>
            </v-col>
        </v-row>
        <v-row class="flex-column my-8">
            <v-list-item-title class="align-self-start font-weight-bold my-2">
                {{user.information === null ? 'null' : user.information}}
            </v-list-item-title>
            <v-divider></v-divider>
        </v-row>

        <v-row class="mt-0">
            <v-col
                v-for="(item, index) in userMainInfo"
                :key="index"
                :cols="item.colsN"
                class="pa-0"
            >
                <v-list-item-group>
                    <v-list-item-content>
                        <v-list-item-subtitle
                            class="blue-grey--text font-weight-medium mb-n1"
                            :class="item.subtitleSize"
                            >{{ item.subtitleText }}</v-list-item-subtitle
                        >
                        <v-list-item-title class="font-weight-medium text-h6">
                            {{ item.method(user[item.titleText]) }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item-group>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import formattingUserInfo from "@/mixins/formattingUserInfo";
import DotsSettings from "@/components/DotsSettings";

export default {
    name: "UserContactInfo",
    mixins: [formattingUserInfo],

    beforeCreate() {
        setTimeout(() => {
            const allUser = this.$store.getters.getAllUsers;

            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].id == this.$route.params.id) {
                    this.user = allUser[i];
                    break;
                }
            }
        }, 700);
    },
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
        user: {
            createdOn: '',
            email: '',
            enabled: '',
            firstName: '',
            id: '',
            lastName: '',
            userName: '',
        },
        userMainInfo: [
            {
                colsN: 4,
                subtitleSize: "text-subtitle-1",
                subtitleText: "Username",
                titleText: "userName",
                method(value) {
                    return value
                    // return value.split(" ").join("") === ""
                    //     ? "username"
                    //     : value;
                },
            },
            {
                colsN: 5,
                subtitleSize: "text-subtitle-1",
                subtitleText: "Email",
                titleText: "email",
                method(value) {
                    return value;
                },
            },
            {
                colsN: 3,
                subtitleSize: "text-subtitle-2",
                subtitleText: "Created on",
                titleText: "createdOn",
                method(value) {
                    return value.split("T")[0];
                },
            },
        ],
    }),
    watch: {
        async $route() {
            const allUser = this.$store.getters.getAllUsers;
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].id == this.$route.params.id) {
                    this.user = allUser[i];
                    break;
                }
            }
        },
    },
    components: {
        DotsSettings,
    },
};
</script>

<style>
</style>