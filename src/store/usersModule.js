import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        // users: [
        //     {
        //         id: 1,
        //         firstName: "Tim",
        //         lastName: "Adler",
        //         userRole: [
        //             { id: 1, name: "Card Management", systemsAplications: ".CARD" },
        //             { id: 2, name: "DIM Management", systemsAplications: "#Identity" },
        //         ],
        //         enabled: true,
        //         information: 'Information',
        //         email: 'Tim.Adler@Musterag.de',
        //         userName: 'AdlerT',
        //         createdOn: '19.07.2022 16:20',
        //     },
        //     {
        //         id: 2,
        //         firstName: "Karl",
        //         lastName: "Bader",
        //         userRole: [
        //             { id: 1, name: "EXTERNAL Manager", systemsAplications: ".EXTERNAL" },
        //             { id: 2, name: "Lockingsystem Management", systemsAplications: ".VISIT" },
        //             { id: 3, name: "Card Management", systemsAplications: ".CARD" },
        //             { id: 4, name: "DIM Management", systemsAplications: "#DigitalIdentitymanagement" },
        //         ],
        //         enabled: true,
        //         information: 'Information',
        //         email: 'Karl.Bader@Mustermann.de',
        //         userName: 'KarlB',
        //         createdOn: '19.07.2022 16:17',
        //     },
        //     {
        //         id: 3,
        //         firstName: "Nadja",
        //         lastName: "Doser",
        //         userRole: [
        //             { id: 1, name: "Lockingsystem Management", systemsAplications: ".VISIT" },
        //             { id: 2, name: "Visitor Management", systemsAplications: ".VISIT" },
        //         ],
        //         enabled: true,
        //         information: 'Information',
        //         email: 'Nadja.Diser@Mueller.de',
        //         userName: 'NadjaD',
        //         createdOn: '19.07.2022 16:22',
        //     },
        //     {
        //         id: 4,
        //         firstName: "Klaus",
        //         lastName: "Eder",
        //         userRole: [
        //             { id: 1, name: "Card Manager", systemsAplications: ".CARD" },
        //         ],
        //         enabled: false,
        //         information: 'Information',
        //         email: 'Klaus.Eder@company1.de',
        //         userName: 'KlausE',
        //         createdOn: '19.07.2022 16:28',
        //     },
        //     {
        //         id: 5,
        //         firstName: "Hans",
        //         lastName: "Eller",
        //         userRole: [
        //             { id: 1, name: "Access Manager", systemsAplications: ".ACCESS" },
        //             { id: 2, name: "DIM Management", systemsAplications: "#DigitalIdentitymanagement" },
        //             { id: 3, name: "EXTERNAL Manager", systemsAplications: ".EXTERNAL" },
        //         ],
        //         enabled: false,
        //         information: 'Information',
        //         email: 'Hans.Eller@muster.de',
        //         userName: 'HansE',
        //         createdOn: '21.07.2022 14:48',
        //     },
        //     {
        //         id: 6,
        //         firstName: '',
        //         lastName: '',
        //         userRole: [
        //             { id: 1, name: "Card Management", systemsAplications: ".CARD" },
        //             { id: 2, name: "DIM Management", systemsAplications: "#Identity" },
        //         ],
        //         enabled: true,
        //         information: 'Information',
        //         email: 'a.goeller@gis-GmbH.de',
        //         userName: '',
        //         createdOn: '21.07.2022 19:04',
        //     },
        //     {
        //         id: 7,
        //         firstName: "Tom",
        //         lastName: "Holland",
        //         userRole: [
        //             { id: 1, name: "Lockingsystem Management", systemsAplications: ".VISIT" },
        //             { id: 2, name: "Visitor Management", systemsAplications: ".VISIT" },
        //         ],
        //         enabled: true,
        //         information: 'Information',
        //         email: 'Tom.Holland@Muster.de',
        //         userName: 'TomH',
        //         createdOn: '02.08.2022 10:36',
        //     },
        //     {
        //         id: 8,
        //         firstName: "Aleks",
        //         lastName: "Olson",
        //         userRole: [
        //             { id: 1, name: "Access Manager", systemsAplications: ".ACCESS" },
        //             { id: 2, name: "DIM Management", systemsAplications: "#DigitalIdentitymanagement" },
        //         ],
        //         enabled: true,
        //         information: 'Information',
        //         email: 'Aleks.Olson@Muster.de',
        //         userName: 'AleksO',
        //         createdOn: '03.08.2022 13:14',
        //     },
        // ],
        users: [],
        roles: [
            {
                id: 11,
                name: ".ACCESS",
                children: [{ id: 1101, name: "Access Manager" }],
            },
            {
                id: 12,
                name: ".CARD",
                children: [{ id: 1201, name: "Card Management" }],
            },
            { id: 13, name: ".CERTIFY" },
            {
                id: 14,
                name: ".EXTERNAL",
                children: [
                    { id: 1401, name: "Default-User" },
                    { id: 1402, name: "Onboarding Manager" },
                    { id: 1403, name: "Extrenal Employee Management" },
                ],
            },
            { id: 15, name: ".FM" },
            { id: 16, name: ".OM" },
            {
                id: 17,
                name: ".VISIT",
                children: [
                    { id: 1701, name: "Visitor Management" },
                    { id: 1702, name: "Facillity-Management" },
                    { id: 1703, name: "Host of Visitors" },
                    { id: 1704, name: "Receptionist" },
                    { id: 1705, name: "Preregister ViSIT" },
                ],
            },
            { id: 18, name: "#Checklisten Management" },
            {
                id: 19,
                name: "#DigitalIdentityManament",
                children: [{ id: 1901, name: "DIM-Management" }],
            },
            { id: 20, name: "#Employee Network" },
            { id: 21, name: "#FotoApp" },
            { id: 22, name: "#Onboarding" },
            { id: 23, name: "#Rooms & Resources" },
            { id: 24, name: "#UserIndentity" },
        ],
    },
    mutations: {
        addUser(state, payload) {
            state.users.push(payload)
        },
        SET_USERS(state, users) {
            state.users = users
        },
        SET_USERS_ROLES(state, userInfo) {
            for (let i = 0; i < state.users.length; i++) {
                Object.assign(state.users[i], {
                    userRole: [
                        {
                            id: userInfo[i].id,
                            name: userInfo[i].name,
                            systemsAplications: userInfo[i].clientId,
                        }
                    ]
                }, { information: userInfo[i].description })
            }
            // console.log(state.users)
        }
    },
    getters: {
        getAllUsers(state) {
            return state.users;
        },
        getAllRoles(state) {
            return state.roles;
        },
    },
    actions: {
        getUsers({ commit }) {
            try {
                axios
                    .get('http://rdp.nks.com.ua:55002/api/users/list')
                    .then(response => {
                        commit('SET_USERS', response.data.data.users)

                        axios
                            .get("http://rdp.nks.com.ua:55002/api/clients/list")
                            .then((response) => {
                                commit('SET_USERS_ROLES', response.data.data.clients)
                            });
                    })
            } catch (error) {
                console.error(error)
            }
        }
    }
}