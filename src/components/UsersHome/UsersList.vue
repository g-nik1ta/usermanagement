<template>
    <v-list class="list" two-lines>
        <v-list-item
            class="py-2 pl-6 pr-0"
            :style="{ borderBottom: '1px solid #f0f0f0' }"
            v-for="(user, index) in users"
            :key="index"
        >
            <v-list-item-avatar class="ma-0" size="48">
                <v-avatar size="48" color="rgba(44, 165, 180, 0.4)">
                    <span
                        :style="{color: '#2CA5B4'}"
                        class="
                            text-subtitle-1 text-center
                            font-weight-bold
                        "
                    >
                        {{ AddUserAvatar(user.name, user.surname)}}
                    </span>
                </v-avatar>
            </v-list-item-avatar>

            <v-badge class="mx-1" bordered dot inline :color="selectColor(user.isActive)"></v-badge>

            <v-list-item-content>
                <v-list-item-subtitle class="text-subtitle-1 font-weight-black black--text">
                    {{ user.name }} {{ user.surname }}
                </v-list-item-subtitle>
                <v-list-item-title>
                    {{ user.userRole }}
                </v-list-item-title>
            </v-list-item-content>

            <v-hover v-slot="{ hover }">
                <div>
                    <v-card color="white" class="dots-window" v-if="hover" tile>
                        <v-list dense>
                            <v-list-item-group color="primary">
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
                        class="dots-btn"
                        :class="{ 'on-hover': hover }"
                    >
                        <v-icon class="text-h5">mdi-dots-vertical</v-icon>
                    </v-btn>
                </div>
            </v-hover>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: "UsersList",
    data: () => ({
        users: [
            {
                name: "Tim",
                surname: "Adler",
                userRole: "Card Management",
                isActive: true,
            },
            {
                name: "Karl",
                surname: "Bader",
                userRole: "Card Management",
                isActive: true,
            },
            {
                name: "Nadja",
                surname: "Doser",
                userRole: "Lockingsystem Management",
                isActive: true,
            },
            {
                name: "Klaus",
                surname: "Eder",
                userRole: "Card Manager",
                isActive: false,
            },
            {
                name: "Hans",
                surname: "Eller",
                userRole: "Access Manager",
                isActive: false,
            },
            {
                name: "Hans",
                surname: "Eller",
                userRole: "Access Manager",
                isActive: true,
            },
            {
                name: "Hans",
                surname: "Eller",
                userRole: "Access Manager",
                isActive: true,
            },
            {
                name: "Hans",
                surname: "Eller",
                userRole: "Access Manager",
                isActive: true,
            },
        ],
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
        ]
    }),
    methods: {
        selectColor(userAcitve) {
            if (userAcitve) return '#2CA5B4';
            return '#D16A42';
        },
        AddUserAvatar(name, surname) {
            return (name[0] + surname[0]);
        },
    }
};
</script>

<style>
.list {
    overflow: scroll;
    overflow-x: hidden;
    height: calc(100vh - 200px);
}
.list::-webkit-scrollbar {
    width: 0;
}
.v-badge__badge {
    width: 12px !important;
    height: 12px !important;
    border-radius: 6px !important;
}

.dots-window {
    position: absolute;
    right: 33px;
    top: 30px;
    z-index: 1;
    width: 260px;
}
</style>