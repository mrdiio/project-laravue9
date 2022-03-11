<template>Hello World</template>

<script>
import useCompanies from "../../composables/companies";
import { onMounted } from "vue";

export default {
  setup() {
    const { companies, getCompanies } = useCompanies();

    onMounted(getCompanies)

    return { companies };
  },
};
</script>