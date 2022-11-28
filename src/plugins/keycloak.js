import Vue from 'vue'
import Keycloak from 'keycloak-js'

// const initOptions = {
//     url: 'http://localhost:8180',
//     realm: 'usermanagement-realm',
//     clientId: 'usermanagement-client'
// }

const initOptions = {
    url: 'https://keycloak.nks.com.ua/auth/',
    realm: 'rm_dev_realm',
    clientId: 'ui_dev'
}

const keycloak = Keycloak(initOptions)

const KeycloakPlugin = {
    install: Vue => {
        Vue.$keycloak = keycloak
    }
}

Vue.use(KeycloakPlugin)

export default KeycloakPlugin