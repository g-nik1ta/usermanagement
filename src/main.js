import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import '@/plugins/keycloak'
import { updateToken } from '@/plugins/keycloak-util'

Vue.config.productionTip = false

Vue.$keycloak.init({ onLoad: 'login-required' }).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        new Vue({
            vuetify,
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
        console.log(Vue.$keycloak.tokenParsed.preferred_username)
        
        // console.log('Данные пользователя: ', Vue.$keycloak.tokenParsed)
        // console.log('Token is: ', Vue.$keycloak.token);
        // console.log('Refresh token is: ', Vue.$keycloak.refreshToken);

        window.onfocus = () => {
        // console.log('Token not refreshed, valid for ' + Math.round(Vue.$keycloak.tokenParsed.exp + Vue.$keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            updateToken()
        }
    }
})
