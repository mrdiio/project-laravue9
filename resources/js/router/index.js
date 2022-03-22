import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from "../components/companies/CompaniesIndex.vue";
import CompaniesCreate from "../components/companies/create.vue";
import CompaniesEdit from "../components/companies/edit.vue";

const routes = [
    {
        path: "/dashboard",
        name: "companies.index",
        component: CompaniesIndex,
    },
    {
        path: "/companies/create",
        name: "companies.create",
        component: CompaniesCreate,
    },
    ,
    {
        path: "/companies/:id/edit",
        name: "companies.edit",
        component: CompaniesEdit,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
