<template>
    <v-container class="mx-0 pa-0" fluid>
        <v-row
            no-gutters
            class="py-4 pl-8 pr-4 font-weight-bold"
            :style="{ color: '#7E7E7E' }"
        >
            <v-col cols="1"></v-col>
            <v-col cols="2">
                <v-list-item-title
                    class="d-flex ml-n1"
                    >Name</v-list-item-title
                >
            </v-col>
            <v-col cols="2">
                <v-list-item-title
                    class="d-flex ml-4"
                    >Email</v-list-item-title
                >
            </v-col>
            <v-col cols="5">
                <v-list-item-title
                    class="d-flex ml-16"
                    >Roles</v-list-item-title
                >
            </v-col>
            <v-col cols="2">
                <v-list-item-title class="d-flex ml-5"
                    >Created at</v-list-item-title
                >
            </v-col>
        </v-row>
        <v-container class="full-list pa-0" fluid>
            <v-row
                no-gutters
                class="py-2 mb-4 flex-column"
                v-for="(user, index) in filtredUsersList()"
                :key="index"
            >
                <v-container fluid class="d-flex pa-0 pl-8 pr-4 mb-4">
                    <v-col cols="1" class="pa-0" align-self="center">
                        <v-list-item-avatar class="ma-0" size="56">
                            <v-avatar size="56" color="rgba(44, 165, 180, 0.4)">
                                <span
                                    :style="{ color: '#2CA5B4' }"
                                    class="
                                        text-h6 text-center
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
                        <v-badge
                            class="ml-3 user-active-full-list"
                            bordered
                            dot
                            :color="user.enabled ? '#2CA5B4' : '#D16A42'"
                        ></v-badge>
                    </v-col>
                    <v-col cols="2" class="pa-0 ml-n1" align-self="center">
                        <v-list-item-content class="py-0">
                            <v-list-item-title class="text-h6 font-weight-bold">
                                {{
                                    getFullName(
                                        user.firstName,
                                        user.lastName,
                                        user.email
                                    )
                                }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-col>
                    <v-col cols="2" class="pa-0 ml-6" align-self="center">
                        <v-list-item-content class="py-0">
                            <v-list-item-title
                                :style="{ fontSize: '18px' }"
                                class="font-weight-medium"
                                >{{ user.email }}</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-col>
                    <v-col cols="5" class="pa-0 pl-12" align-self="center">
                        <v-list-item-content class="flex-nowrap py-0">
                            <v-list-item-title
                                v-for="role in user.userRole === undefined
                                ? plugRoles
                                : user.userRole[0].name === null
                                ? plugRoles
                                : user.userRole.length > 2
                                    ? [user.userRole[0], user.userRole[1]]
                                    : user.userRole"
                                :key="role.id"
                                class="font-weight-medium roles-block"
                            >
                                {{ role.name }}
                            </v-list-item-title>
                            <v-list-item-title
                                v-if="user.userRole === undefined ? 
                                plugRoles.length > 2 : user.userRole.length > 2"
                                class="
                                    font-weight-black
                                    roles-block
                                    pa-2
                                    rounded-circle
                                "
                            >
                                <span> +{{ user.userRole === undefined ? 
                                plugRoles.length - 2 : user.userRole.length - 2 }} </span>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-col>
                    <v-col cols="2" class="pa-0 d-flex" align-self="center">
                        <v-list-item-title>{{
                            user.createdOn
                        }}</v-list-item-title>
                        <DotsSettings></DotsSettings>
                    </v-col>
                </v-container>
                <v-divider></v-divider>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import formattingUserInfo from "@/mixins/formattingUserInfo";
import DotsSettings from "@/components/DotsSettings";

export default {
    name: "UsersFullList",
    props: {
        filterValue: {
            type: String,
            default: "",
        },
        filterRolesValue: {
            type: String,
            default: "",
        },
        rolesFilters: {
            type: String,
            default: "",
        },
    },
    mixins: [formattingUserInfo],
    data: () => ({
        plugRoles: [
            {id: 1, name: 'null'},
            {id: 2, name: 'null'},
        ],
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
    methods: {
        filtredUsersList() {
            setTimeout(() => {
                this.$forceUpdate()
            }, 10)
            let usersList = this.$store.getters.getAllUsers;

            if (this.filterValue) {
                return usersList.filter((item) => {
                    return this.filterValue
                        .toLowerCase()
                        .split(" ")
                        .every((v) => 
                        item.email.toLowerCase().includes(v) ||
                        item.firstName.toLowerCase().includes(v) || 
                        item.lastName.toLowerCase().includes(v)
                        );
                });
            } else 
            if( this.filterRolesValue) {
                return usersList.filter((item) => {
                    let flag = false;
                    for(let i = 0; i < item.userRole.length; i++) {
                        if(this.filterRolesValue.includes(item.userRole[i].name)) flag = true;
                    }
                    return flag
                });
            } else {
                return usersList;
            }
        },
    },
    components: {
        DotsSettings,
    }
};
</script>

<style>
.roles-block {
    font-size: 18px;
    max-width: fit-content;
    background-color: rgba(38, 153, 148, 0.17);
    border-radius: 17px;
    padding: 8px 26px 6px 12px;
    margin-right: 18px;
}
.user-active-full-list > .v-badge__wrapper > .v-badge__badge {
    width: 16px !important;
    height: 16px !important;
    border-radius: 8px !important;
}
.full-list {
    overflow: scroll;
    overflow-x: hidden;
    height: calc(100vh - 295px);
}
.full-list::-webkit-scrollbar {
    width: 0;
}
</style>