export default {
    state: {
        users: [
            {
                id: 1,
                firstname: "Tim",
                surname: "Adler",
                userRole: [
                    { id: 1, name: "Card Management", systemsAplications: ".CARD" },
                    { id: 2, name: "DIM Management", systemsAplications: "#Identity" },
                ],
                isActive: true,
                information: 'Information',
                email: 'Tim.Adler@Musterag.de',
                username: 'AdlerT',
                userCreater: '19.07.2022 16:20',
            },
            {
                id: 2,
                firstname: "Karl",
                surname: "Bader",
                userRole: [
                    { id: 1, name: "EXTERNAL Manager", systemsAplications: ".EXTERNAL" },
                    { id: 2, name: "Lockingsystem Management", systemsAplications: ".VISIT" },
                    { id: 3, name: "Card Management", systemsAplications: ".CARD" },
                    { id: 4, name: "DIM Management", systemsAplications: "#DigitalIdentitymanagement" },
                ],
                isActive: true,
                information: 'Information',
                email: 'Karl.Bader@Mustermann.de',
                username: 'KarlB',
                userCreater: '19.07.2022 16:17',
            },
            {
                id: 3,
                firstname: "Nadja",
                surname: "Doser",
                userRole: [
                    { id: 1, name: "Lockingsystem Management", systemsAplications: ".VISIT" },
                    { id: 2, name: "Visitor Management", systemsAplications: ".VISIT" },
                ],
                isActive: true,
                information: 'Information',
                email: 'Nadja.Diser@Mueller.de',
                username: 'NadjaD',
                userCreater: '19.07.2022 16:22',
            },
            {
                id: 4,
                firstname: "Klaus",
                surname: "Eder",
                userRole: [
                    { id: 1, name: "Card Manager", systemsAplications: ".CARD" },
                ],
                isActive: false,
                information: 'Information',
                email: 'Klaus.Eder@company1.de',
                username: 'KlausE',
                userCreater: '19.07.2022 16:28',
            },
            {
                id: 5,
                firstname: "Hans",
                surname: "Eller",
                userRole: [
                    { id: 1, name: "Access Manager", systemsAplications: ".ACCESS" },
                    { id: 2, name: "DIM Management", systemsAplications: "#DigitalIdentitymanagement" },
                    { id: 3, name: "EXTERNAL Manager", systemsAplications: ".EXTERNAL" },
                ],
                isActive: false,
                information: 'Information',
                email: 'Hans.Eller@muster.de',
                username: 'HansE',
                userCreater: '21.07.2022 14:48',
            },
            {
                id: 6,
                firstname: '',
                surname: '',
                userRole: [
                    { id: 1, name: "Card Management", systemsAplications: ".CARD" },
                    { id: 2, name: "DIM Management", systemsAplications: "#Identity" },
                ],
                isActive: true,
                information: 'Information',
                email: 'a.goeller@gis-GmbH.de',
                username: '',
                userCreater: '21.07.2022 19:04',
            },
            {
                id: 7,
                firstname: "Tom",
                surname: "Holland",
                userRole: [
                    { id: 1, name: "Lockingsystem Management", systemsAplications: ".VISIT" },
                    { id: 2, name: "Visitor Management", systemsAplications: ".VISIT" },
                ],
                isActive: true,
                information: 'Information',
                email: 'Tom.Holland@Muster.de',
                username: 'TomH',
                userCreater: '02.08.2022 10:36',
            },
            {
                id: 8,
                firstname: "Aleks",
                surname: "Olson",
                userRole: [
                    { id: 1, name: "Access Manager", systemsAplications: ".ACCESS" },
                    { id: 2, name: "DIM Management", systemsAplications: "#DigitalIdentitymanagement" },
                ],
                isActive: true,
                information: 'Information',
                email: 'Aleks.Olson@Muster.de',
                username: 'AleksO',
                userCreater: '03.08.2022 13:14',
            },
        ],
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
    actions: {}
}