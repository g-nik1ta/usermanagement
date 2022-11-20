<template>
    <v-row no-gutters class="pl-8 pr-4">
        <v-col cols="3" class="pr-8">
            <SlotsFilter :slotName="slotName">
                <template v-slot:textsearch>
                    <v-text-field
                        label="Search"
                        v-model="search"
                        @input="searchOnChange()"
                        single-line
                        hide-details
                        outlined
                    ></v-text-field>
                </template>
                <template v-slot:state>
                    <v-select label="Select State" outlined disabled>
                    </v-select>
                </template>
                <template v-slot:roles>
                    <v-select
                        v-model="searchroles"
                        @change="{searchRolesOnChange()}"
                        :items="rolesFilters"
                        label="Select Roles"
                        multiple
                        chips
                        outlined
                    >
                        <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index < 2">
                                <span>{{ item }}</span>
                            </v-chip>
                            <span
                                v-if="index === 2"
                                class="grey--text text-caption"
                            >
                                (+{{ searchroles.length - 2 }} others)
                            </span>
                        </template>
                    </v-select>
                </template>
            </SlotsFilter>
        </v-col>
        <v-col cols="3" class="pr-8">
            <v-select
                :items="itemsFilters"
                label="Select filter type"
                outlined
                color="black"
                item-color="white"
                @change="getSlotName($event.name)"
            >
                <template v-slot:selection="{ item }">
                    <div class="d-flex align-center">
                        <v-icon color="#5C666B" size="30px">
                            {{ item.icon }}
                        </v-icon>
                        <span
                            class="font-weight-bold pl-2"
                            :style="{ fontSize: '18px' }"
                        >
                            {{ item.name }}
                        </span>
                    </div>
                </template>
                <template v-slot:item="{ item }">
                    <div class="my-2">
                        <v-icon color="#5C666B">
                            {{ item.icon }}
                        </v-icon>
                        <span
                            class="
                                font-weight-bold
                                text-subtitle-1
                                pl-3
                                black--text
                            "
                        >
                            {{ item.name }}
                        </span>
                    </div>
                </template>
            </v-select>
        </v-col>
        <v-btn
            class="arrow-btn"
            width="40px"
            height="40px"
            @click="$router.push({ name: 'startPages' })"
            fab
        >
            <v-icon class="text-h4">mdi-chevron-left</v-icon>
        </v-btn>
    </v-row>
</template>

<script>
import SlotsFilter from "@/components/UsersFullList/SlotsFilter";

export default {
    name: "UsersFilter",
    data: () => ({
        slotName: "textsearch",
        search: '',
        searchroles: [],
        itemsFilters: [
            {
                name: "Text search",
                icon: "mdi-text-recognition",
            },
            {
                name: "State",
                icon: "mdi-lock-open-variant-outline",
            },
            {
                name: "Roles",
                icon: "mdi-google-analytics",
            },
        ],
        rolesFilters: [
            "Card Management",
            "DIM Management",
            "EXTERNAL Manager",
            "Lockingsystem Management",
            "DIM Management",
            "Visitor Management",
            "Card Manager",
            "Access Manager",
        ],
    }),
    components: {
        SlotsFilter,
    },
    methods: {
        searchOnChange() {
            this.$emit('filterValue', this.search)
        },
        searchRolesOnChange() {
            this.$emit('filterRolesValue', this.searchroles, this.rolesFilters)
        },
        getSlotName(e) {
            this.search = '';
            this.searchroles = [];
            this.searchOnChange();
            this.searchRolesOnChange();
            this.slotName = e.split(" ").join("").toLowerCase();
        },
    },
};
</script>

<style>
.v-select__selections {
    padding: 0 !important;
    min-height: auto !important;
}
.v-menu__content {
    overflow: scroll;
    overflow-x: hidden;
}
.v-menu__content::-webkit-scrollbar {
    width: 0;
}
.theme--light.v-list {
    padding: 0;
}
.theme--light.v-list-item:hover::before {
    background-color: dimgrey !important;
    opacity: 0.1 !important;
}
</style>