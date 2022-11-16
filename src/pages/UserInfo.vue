<template>
    <v-col cols="9" class="pt-12 pr-8 pl-6">
        <v-card elevation="1" class="white px-12 pb-14">
            <v-row class="d-flex justify-space-between py-6">
                <v-list-item-group class="d-flex">
                    <v-list-item-avatar class="ma-0" size="86">
                        <v-avatar size="86" color="rgba(44, 165, 180, 0.4)">
                            <span
                                :style="{ color: '#2CA5B4' }"
                                class="text-h4 text-center font-weight-bold"
                            >
                                {{ AddUserAvatar(user.name, user.surname, user.email)}}
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
                            >  </v-list-item-subtitle
                        >
                        <v-list-item-title class="font-weight-medium text-h6"
                            >{{getFullName(user.name, user.surname, user.email)}}</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item-group>
                <v-list-item-group class="d-flex align-self-start">
                    <v-list-item-title
                        class="
                            font-weight-regular
                            text-subtitle-1
                            white--text
                            pr-5
                            rounded-pill
                        "
                        :class="[user.isActive ? 'blue-grey' : 'red', user.isActive ? 'lighten-1' : 'darken-3']"
                    >
                        <v-icon color="white" class="pr-1 pl-3" size="20px"
                            >{{user.isActive ? 'mdi-check' : 'mdi-close'}}</v-icon
                        >
                        {{user.isActive ? 'Is active' : 'Is not active'}}</v-list-item-title
                    >
                    <v-hover v-slot="{ hover }" class="mr-2">
                        <div>
                            <v-card
                                color="white"
                                class="user-info-dots-window"
                                v-if="hover"
                                tile
                            >
                                <v-list dense>
                                    <v-list-item-group color="primary">
                                        <v-list-item
                                            v-for="(item, index) in userSettingsWindow"
                                            :key="index"
                                            :class="
                                                index >= 3 ? 'mt-3' : 'mt-1'
                                            "
                                        >
                                            <v-list-item-icon class="ma-0 mr-3">
                                                <v-icon
                                                    :color="item.color"
                                                    size="22px"
                                                >
                                                    {{ item.icon }}
                                                </v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content
                                                class="font-weight-medium"
                                            >
                                                <v-list-item-title
                                                    class="text-subtitle-2"
                                                >
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
                                class="dots-btn ml-2"
                                :class="{ 'on-hover': hover }"
                            >
                                <v-icon class="text-h5"
                                    >mdi-dots-vertical</v-icon
                                >
                            </v-btn>
                        </div>
                    </v-hover>
                </v-list-item-group>
            </v-row>
            <v-row class="flex-column my-8">
                <v-list-item-title
                    class="align-self-start font-weight-bold my-2"
                    >{{user.information}}</v-list-item-title
                >
                <v-divider></v-divider>
            </v-row>
            <v-row class="justify-space-between">
                <v-list-item-group class="d-flex">
                    <v-list-item-content>
                        <v-list-item-subtitle
                            class="
                                blue-grey--text
                                font-weight-medium
                                text-subtitle-1
                                mb-n1
                            "
                            >Username</v-list-item-subtitle
                        >
                        <v-list-item-title class="font-weight-medium text-h6"
                            >{{user.userName.split(' ').join('') === '' ? 'username' : user.userName}}</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item-group>

                <v-list-item-group class="d-flex">
                    <v-list-item-content>
                        <v-list-item-subtitle
                            class="
                                blue-grey--text
                                font-weight-medium
                                text-subtitle-1
                                mb-n1
                            "
                            >Email</v-list-item-subtitle
                        >
                        <v-list-item-title class="font-weight-medium text-h6"
                            >{{user.email}}</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item-group>

                <v-list-item-group class="d-flex">
                    <v-list-item-content>
                        <v-list-item-subtitle
                            class="
                                blue-grey--text
                                font-weight-medium
                                text-subtitle-2
                                mb-n1
                            "
                            >Created on</v-list-item-subtitle
                        >
                        <v-list-item-title class="font-weight-medium text-h6"
                            >{{user.userCreater.split(' ')[0]}}</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item-group>
            </v-row>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "UserInfo",
    data: () => ({
        userSettingsWindow: [
            {
                icon: 'mdi-square-edit-outline',
                title: 'Edit',
                color: '#000'
            },
            {
                icon: 'mdi-account-lock-open-outline',
                title: 'Reset Password',
                color: '#000'
            },
            {
                icon: 'mdi-account-cog-outline',
                title: 'Roles',
                color: '#000'
            },
            {
                icon: 'mdi-stop-circle-outline',
                title: 'Disable user',
                color: '#D16A42'
            },
            {
                icon: 'mdi-trash-can-outline',
                title: 'Delete user',
                color: '#B43B2C'
            },
        ],
        user: {},
    }),
    created() {
        this.user = this.$store.getters.getAllUsers[this.$route.params.id - 1];
    },
    watch: {
        async '$route'() {
            this.user = this.$store.getters.getAllUsers[this.$route.params.id - 1];
        }
    },
    methods: {
        AddUserAvatar(name, surname, email) {
            if(name.split(' ').join('') === '' || surname.split(' ').join('') === '') return (email.split('.')[0][0] + email.split('.')[1][0]);
            return (name[0] + surname[0]);
        },
        getFullName(name, surname, email) {
            if(name.split(' ').join('') === '' || surname.split(' ').join('') === '') return email;
            return `${name} ${surname}`
        },
    },
};
</script>

<style>
.user-info-dots-window {
    position: absolute;
    right: 40px;
    z-index: 1;
    max-width: 270px;
    width: 270px;
}
</style>