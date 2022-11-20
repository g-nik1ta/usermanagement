<template>
    <v-card width="800px" elevation="1" class="pb-14 py-2 my-3 mx-auto">
        <v-subheader class="px-0">
            <span
                @click="
                    btnFlag = true;
                    $refs.containerForm.scrollTop = 0;
                "
                class="tfont-weight-medium px-5 py-1"
                :class="[btnFlag ? 'btnFlag-true' : 'btnFlag-false px-7']"
            >
                User Information</span
            >
            <v-divider class="mx-4" :style="{ maxWidth: '120px' }"></v-divider>
            <span
                @click="
                    btnFlag = false;
                    $refs.containerForm.scrollTop = 530;
                "
                class="font-weight-medium px-1 py-1"
                :class="[!btnFlag ? 'btnFlag-true' : 'btnFlag-false']"
            >
                Applications, Systems & User Roles</span
            >
        </v-subheader>

        <v-divider></v-divider>
        <v-container ref="containerForm" class="container-form pa-0 pb-16">
            <v-row no-gutters class="avatar-row">
                <v-avatar size="100" color="#D1D1D1" class="avatar flex-column">
                    <v-icon class="text-h2" color="#fff">mdi-account</v-icon>
                    <span
                        class="
                            white--text
                            text-subtitle-1
                            font-weight-medium
                            mb-2
                            mt-n2
                        "
                    >
                        Bild
                    </span>
                </v-avatar>
            </v-row>
            <form
                @submit.prevent="submit"
                class="mt-10 pl-6"
                :style="{ position: 'relative' }"
            >
                <v-row no-gutters>
                    <v-col cols="6">
                        <v-text-field
                            v-model="form.surname"
                            type="text"
                            outlined
                            dense
                            class="pr-7"
                            label="Surname"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="form.firstname"
                            type="text"
                            outlined
                            dense
                            class="pr-7"
                            label="FirstName"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="6">
                        <v-text-field
                            v-model="form.username"
                            type="text"
                            outlined
                            dense
                            class="pr-7"
                            label="Username"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="form.email"
                            type="email"
                            outlined
                            dense
                            class="pr-7"
                            :error-messages="emailErrors"
                            label="Email address"
                            @input="$v.form.email.$touch()"
                            @blur="$v.form.email.$touch()"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-select
                            v-model="form.select"
                            outlined
                            dense
                            class="pr-7"
                            :items="realmItems"
                            :error-messages="selectErrors"
                            label="Realm"
                            @change="$v.form.select.$touch()"
                            @blur="$v.form.select.$touch()"
                        ></v-select>
                    </v-col>
                </v-row>
                <span class="font-weight-black d-block mb-2 mb-3 pl-1"
                    >Password</span
                >
                <v-row no-gutters>
                    <v-col cols="6">
                        <v-text-field
                            v-model.trim="form.password"
                            type="password"
                            outlined
                            dense
                            class="pr-7"
                            :error-messages="passwordErrors"
                            label="Password"
                            @input="$v.form.password.$touch()"
                            @blur="$v.form.password.$touch()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model.trim="form.confirmPassword"
                            type="password"
                            outlined
                            dense
                            class="pr-7"
                            :error-messages="confirmPasswordErrors"
                            label="Confirm Password"
                            @input="$v.form.confirmPassword.$touch()"
                            @blur="$v.form.confirmPassword.$touch()"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-checkbox
                        v-model="form.checkbox"
                        color="rgba(0,0,0,1)"
                        class="font-weight-regular"
                        label="Temporary Password?"
                    ></v-checkbox>
                </v-row>
                <v-row no-gutters class="ml-n6 flex-column submit-block">
                    <v-divider></v-divider>
                    <v-container fluid class="pa-0 py-2 d-flex">
                        <v-col cols="6" class="pr-4">
                            <v-btn
                                width="165"
                                class="float-right white--text text-capitalize"
                                color="#2CA5B4"
                                @click="clear"
                            >
                                Cancel
                            </v-btn>
                        </v-col>
                        <v-col cols="6" class="pl-4">
                            <v-btn
                                width="165"
                                class="white--text text-capitalize"
                                color="#BBBBBB"
                                type="submit"
                            >
                                Save
                            </v-btn>
                        </v-col>
                    </v-container>
                </v-row>
            </form>
            <v-divider></v-divider>
            <v-container class="pa-0 pl-5 pr-16 pb-4">
                <span
                    class="mt-5 mb-6 d-block font-weight-bold"
                    :style="{ fontSize: '18px' }"
                    >Applications, Systems & User Roles</span
                >
                <v-row no-gutter>
                    <v-col>
                        <span
                            >Select the application, systems and User Roles for
                            which the user should be authorized.</span
                        >
                    </v-col>
                    <v-col cols="6" class="pl-11"> Selected: </v-col>
                </v-row>
                <v-row no-gutter>
                    <v-col cols="6" class="pr-0 mr-5">
                        <v-treeview
                            v-model="selection"
                            :items="rolesItems"
                            selection-type="independent"
                            selectable
                            return-object
                            expand-icon=""
                            selected-color="#2CA5B4"
                            open-all
                            class="text-subtitle-1 ml-n8"
                        >
                            <template v-slot:label="{ item }">
                                <span
                                    v-if="item.id > 100"
                                    class="font-weight-bold d-flex align-center"
                                >
                                    <v-avatar size="36" color="#2CA5B433">
                                        <v-icon>mdi-lock-pattern</v-icon>
                                    </v-avatar>
                                    <span
                                        class="pl-2"
                                        :style="{
                                            maxWidth: '210px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }"
                                        >{{ item.name }}</span
                                    >
                                    <v-icon class="text-h5 ml-auto"
                                        >mdi-dots-vertical</v-icon
                                    >
                                </span>
                                <span v-else>
                                    {{ item.name }}
                                </span>
                            </template>
                        </v-treeview>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="pa-6 pt-0" cols="5">
                        <template v-if="!selection.length">
                            No nodes selected.
                        </template>
                        <template v-else>
                            <div v-for="node in sortSelection" :key="node.id">
                                <span
                                    v-if="node.id < 100"
                                    class="mt-4 pl-3 d-block"
                                    :style="{ fontSize: '17px' }"
                                >
                                    {{ node.name }}
                                </span>
                                <span v-else class="roles-block-create">
                                    {{ node.name }}
                                </span>
                            </div>
                        </template>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    name: "CreateUser",
    data: () => ({
        btnFlag: true,
        selection: [],
        rolesItems: [],
        realmItems: ["Realm 1", "Realm 2", "Realm 3", "Realm 4"],
        form: {
            id: '',
            surname: "",
            firstname: "",
            username: "",
            email: "",
            select: null,
            password: "",
            confirmPassword: "",
            checkbox: false,
            userRole: [],

            isActive: false,
            userCreater: "??? ?",
            information: 'Info'
        },
    }),
    created() {
        this.rolesItems = this.$store.getters.getAllRoles;
    },
    validations: {
        form: {
            email: { required, email },
            select: { required },
            password: { required, minLength: minLength(4) },
            confirmPassword: { required, sameAsPassword: sameAs("password") },
        },
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.email && errors.push("Must be valid e-mail");
            !this.$v.form.email.required && errors.push("E-mail is required");
            return errors;
        },
        selectErrors() {
            const errors = [];
            if (!this.$v.form.select.$dirty) return errors;
            !this.$v.form.select.required && errors.push("Item is required");
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.form.password.$dirty) return errors;
            !this.$v.form.password.minLength &&
                errors.push("Password must be at least 4 characters long");
            !this.$v.form.password.required &&
                errors.push("Password is required");
            return errors;
        },
        confirmPasswordErrors() {
            const errors = [];
            if (!this.$v.form.confirmPassword.$dirty) return errors;
            !this.$v.form.confirmPassword.sameAsPassword &&
                errors.push("Passwords must be identical");
            !this.$v.form.confirmPassword.required &&
                errors.push("Password is required");
            return errors;
        },
        sortSelection() {
            let arr = this.selection;
            if (arr.length > 1) {
                arr = arr.sort((a, b) =>
                    String(a.id) > String(b.id) ? 1 : -1
                );
            }
            return this.selection;
        },
    },

    methods: {
        submit() {
            this.$v.form.$touch();
            let userRole = [];
            for (let i = 0; i < this.selection.length; i++) {
                const element = this.selection[i];
                if (element.id < 100) {
                    if (i + 1 === this.selection.length) {
                        userRole.push(
                            new Object({
                                id: element.id,
                                name: element.name,
                                systemsAplications: element.name,
                            })
                        );
                    } else {
                        for (let j = i; j < this.selection.length; j++) {
                            const nextElement = this.selection[i + 1];
                            if (element.id === String(nextElement.id).slice(0, 2)) {
                                userRole.push(
                                    new Object({
                                        id: nextElement.id,
                                        name: element.name,
                                        systemsAplications: nextElement.name,
                                    })
                                );
                            } else {
                                userRole.push(
                                    new Object({
                                        id: element.id,
                                        name: element.name,
                                        systemsAplications: element.name,
                                    })
                                );
                                break;
                            }
                        }
                    }
                } else {
                    let nameID = null;
                    for(let j = 0; j < this.rolesItems.length; j++) {
                    const el = this.rolesItems[j];
                        if (String(element.id).slice(0, 2) === String(el.id)) {
                            nameID = j;
                            break;
                        }
                    }
                    userRole.push(
                        new Object({
                            id: element.id,
                            name: element.name,
                            systemsAplications: this.rolesItems[nameID].name,
                        })
                    );
                }
            }
            this.form.userRole = userRole;
            this.form.id = this.$store.getters.getAllUsers.length + 1;
            this.$store.commit("addUser", this.form);
        },
        clear() {
            this.$v.form.$reset();
            this.form.surname = "";
            this.form.firstname = "";
            this.form.username = "";
            this.form.email = "";
            this.form.select = null;
            this.form.password = "";
            this.form.confirmPassword = "";
            this.form.checkbox = false;

            this.selection = [];
        },
    },
};
</script>

<style>
.roles-block-create {
    max-width: fit-content;
    background-color: rgba(38, 153, 148, 0.17);
    border-radius: 17px;
    padding: 4px 24px 3px 16px;
    margin-right: 18px;
    margin-bottom: 6px;
    display: block;
}
.v-treeview-node__children {
    padding-left: 8px;
}
.submit-block {
    position: fixed;
    z-index: 1;
    bottom: 0;
    width: 800px;
    background-color: #fff;
}
.container-form {
    overflow: scroll;
    overflow-x: hidden;
    height: calc(100vh - 196px) !important;
}
.container-form::-webkit-scrollbar {
    width: 0;
}
.v-text-field--outlined fieldset {
    border: 2px solid #e8eaec !important;
}
.v-text-field--outlined .theme--light.v-label {
    color: rgb(75, 81, 85, 0.5) !important;
}
.avatar {
    position: absolute;
    left: 50%;
    bottom: -14px;
    transform: translateX(-50%);
}
.avatar-row {
    height: 120px;
    background-color: rgb(44, 165, 180, 0.1);
    position: relative;
}
.v-subheader {
    height: auto;
}
.btnFlag-true {
    color: #2ca5b4;
    cursor: pointer;
    font-size: 18px;
    border-bottom: 3px solid #2ca5b4;
}
.btnFlag-false {
    color: #888888;
    font-size: 16px;
    cursor: pointer;
}
</style>