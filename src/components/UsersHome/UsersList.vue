<template>
    <v-list class="list" two-lines>
        <v-list-item
            class="py-2 pl-6 pr-0"
            :style="{ borderBottom: '1px solid #f0f0f0' }"
            v-for="(user, index) in filtredUsersList"
            :key="index"
            @click="
                $router.push({
                    name: 'userContactInfo',
                    params: { id: user.id },
                })
            "
        >
            <v-list-item-avatar class="ma-0" size="48">
                <v-avatar size="48" color="rgba(44, 165, 180, 0.4)">
                    <span
                        :style="{ color: '#2CA5B4' }"
                        class="
                            text-subtitle-1 text-center
                            font-weight-bold
                            text-uppercase
                        "
                    >
                        {{ AddUserAvatar(user.name, user.surname, user.email) }}
                    </span>
                </v-avatar>
            </v-list-item-avatar>

            <v-badge
                class="mx-1 user-active-list"
                bordered
                dot
                inline
                :color="user.isActive ? '#2CA5B4' : '#D16A42'"
            ></v-badge>

            <v-list-item-content>
                <v-list-item-subtitle
                    class="text-subtitle-1 font-weight-black black--text"
                >
                    {{ getFullName(user.name, user.surname, user.email) }}
                </v-list-item-subtitle>
                <v-list-item-title>
                    {{ user.userRole[0].name }}
                </v-list-item-title>
            </v-list-item-content>
            <DotsSettings></DotsSettings>
        </v-list-item>
    </v-list>
</template>

<script>
import formattingUserInfo from "@/mixins/formattingUserInfo";
import DotsSettings from "@/components/DotsSettings";

export default {
    name: "UsersList",
    props: {
        filterValue: {
            type: String,
            default: "",
        },
    },
    mixins: [formattingUserInfo],
    computed: {
        filtredUsersList() {
            let usersList = this.$store.getters.getAllUsers;
            if (this.filterValue) {
                return usersList.filter((item) => {
                    return this.filterValue
                        .toLowerCase()
                        .split(" ")
                        .every((v) => 
                        item.email.toLowerCase().includes(v) ||
                        item.name.toLowerCase().includes(v) || 
                        item.surname.toLowerCase().includes(v) || 
                        item.userRole[0].name.toLowerCase().split(" ").join("").includes(v)
                        );
                });
            } else {
                return usersList;
            }
        },
    },
    components: {
        DotsSettings,
    },
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
.user-active-list > .v-badge__wrapper > .v-badge__badge {
    width: 12px !important;
    height: 12px !important;
    border-radius: 6px !important;
}
</style>