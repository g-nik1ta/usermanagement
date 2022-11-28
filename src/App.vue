<template>
    <v-app>
        <AppBar></AppBar>
        <v-main class="pt-0">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import Vue from "vue";
import AppBar from "@/components/AppBar.vue";
import axios from "axios";
import { updateToken } from "@/plugins/keycloak-util";

const AUTHORIZATION_HEADER = "Authorization";

export default Vue.extend({
    name: "App",
    created: function () {
        axios.interceptors.request.use(async (config) => {
            // Обновляем токен
            const token = await updateToken();
            // Добавляем токен в каждый запрос
            config.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`;
            return config;
        });
        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return new Promise((resolve, reject) => {
                    // Если от API получена ошибка - отправляем на страницу /error
                    this.$router.push("/error");
                    reject(error);
                });
            }
        );
    },
    watch: {
        $route() {
            updateToken()
        }
    },
    components: {
        AppBar,
    },
});
</script>

<style lang="scss">
.v-application {
    background-color: #f0f0f0 !important;
}
</style>
