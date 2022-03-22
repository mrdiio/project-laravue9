<template>
  <div
    class="
      overflow-hidden overflow-x-auto
      min-w-full
      align-middle
      sm:rounded-lg
    "
  >
    <div class="flex place-content-end mb-4">
      <div
        class="
          px-4
          py-2
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          cursor-pointer
        "
      >
        <router-link
          :to="{ name: 'companies.create' }"
          class="text-sm font-medium"
          >Create Company
        </router-link>
      </div>
    </div>

    <table class="min-w-full border divide-y divide-gray-200">
      <thead>
        <tr>
          <th class="py-3 px-6 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Name</span
            >
          </th>
          <th class="py-3 px-6 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Email</span
            >
          </th>
          <th class="py-3 px-6 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Address</span
            >
          </th>
          <th class="py-3 px-6 bg-gray-50">
            <span
              class="
                text-xs
                font-medium
                tracking-wider
                leading-4
                text-left text-gray-500
                uppercase
              "
              >Website</span
            >
          </th>
          <th class="py-3 px-6 bg-gray-50"></th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 divide-solid">
        <template v-if="companies.length > 0">
          <tr class="bg-white" v-for="company in companies" :key="company.id">
            <td
              class="
                py-4
                px-6
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ company.name }}
            </td>
            <td
              class="
                py-4
                px-6
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ company.email }}
            </td>
            <td
              class="
                py-4
                px-6
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ company.address }}
            </td>
            <td
              class="
                py-4
                px-6
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              {{ company.website }}
            </td>
            <td
              class="
                py-4
                px-6
                text-sm
                leading-5
                text-gray-900
                whitespace-no-wrap
              "
            >
              <router-link
                :to="{ name: 'companies.edit', params: { id: company.id } }"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  bg-gray-800
                  border
                  rounded-lg
                  text-white text-sm
                  tracking-wider
                  uppercase
                "
              >Edit</router-link>
              <button
                @click="deleteCompany(company.id)"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  bg-gray-800
                  border
                  rounded-lg
                  text-white text-sm
                  tracking-wider
                  uppercase
                "
              >
                Delete
              </button>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td
            class="py-4 px-6 text-sm leading-5 text-gray-900 whitespace-no-wrap"
            colspan="4"
          >
            There's No Records Yet
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import useCompanies from "../../composables/companies";
import { onMounted } from "vue";

export default {
  setup() {
    const { companies, getCompanies, destroyCompany } = useCompanies();

    onMounted(getCompanies);

    const deleteCompany = async (id) => {
      if (!window.confirm("Are you sure?")) return;

      await destroyCompany(id);
      await getCompanies();
    };

    return { companies, deleteCompany };
  },
};
</script>