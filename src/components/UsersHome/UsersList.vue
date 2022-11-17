<template>
    <v-list class="list" two-lines>
        <v-list-item
            class="py-2 pl-6 pr-0"
            :style="{ borderBottom: '1px solid #f0f0f0' }"
            v-for="(user, index) in $store.getters.getAllUsers"
            :key="index"
            @click="$router.push({name: 'userContactInfo', params: { id: user.id } }) "
        >
            <v-list-item-avatar class="ma-0" size="48">
                <v-avatar size="48" color="rgba(44, 165, 180, 0.4)">
                    <span
                        :style="{color: '#2CA5B4'}"
                        class="
                            text-subtitle-1 text-center
                            font-weight-bold text-uppercase
                        "
                    >
                        {{ AddUserAvatar(user.name, user.surname, user.email)}}
                    </span>
                </v-avatar>
            </v-list-item-avatar>

            <v-badge class="mx-1" bordered dot inline :color="user.isActive ? '#2CA5B4' : '#D16A42'"></v-badge>

            <v-list-item-content>
                <v-list-item-subtitle class="text-subtitle-1 font-weight-black black--text">
                    {{getFullName(user.name, user.surname, user.email)}}
                </v-list-item-subtitle>
                <v-list-item-title>
                    {{ user.userRole[0].name }}
                </v-list-item-title>
            </v-list-item-content>

            <v-hover v-slot="{ hover }" class="mr-2">
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
import formattingUserInfo from '@/mixins/formattingUserInfo'

export default {
    name: "UsersList",
    mixins: [formattingUserInfo],
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
    }),
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