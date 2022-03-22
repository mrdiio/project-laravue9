import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useCompanies() {
    const router = useRouter();
    const errors = ref('');
    
    const companies = ref([]);
    const company = ref([]);

    const getCompanies = async () => {
        let response = await axios.get("/api/companies");
        companies.value = response.data.data;
    };

    const storeCompany = async (data) => {
        errors.value = '';
        try {
            await axios.post("/api/companies", data);
            await router.push({ name: "companies.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (let key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };

    const showCompany = async (id) => {
        let response = await axios.get(`/api/companies/${id}`);
        company.value = response.data.data;
    }

    const updateCompany = async (id) => {
        errors.value = "";
        try {
            await axios.put(`/api/companies/${id}`, company.value);
            await router.push({ name: "companies.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (let key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };

    const destroyCompany = async (id) => {
        await axios.delete("/api/companies/" + id);
    };


    return {
        errors,
        companies,
        getCompanies,
        storeCompany,
        company,
        showCompany,
        updateCompany,
        destroyCompany,
    };
}
