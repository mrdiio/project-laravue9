<template>
  <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
    {{ errors }}
  </div>

  <form class="space-y-6" @submit.prevent="saveCompany">
    <div class="space-y-4 rounded-md shadow-sm">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          Name
        </label>
        <div class="mt-1">
          <input
            type="text"
            id="name"
            name="name"
            class="
              block
              mt-1
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-gray-400
            "
            v-model="form.name"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div class="mt-1">
            <input
              type="email"
              id="email"
              name="email"
              class="
                block
                mt-1
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-gray-400
              "
              v-model="form.email"
            />
          </div>
        </div>

        <div>
          <label for="address" class="block text-sm font-medium text-gray-700">
            Address
          </label>
          <div class="mt-1">
            <input
              type="text"
              id="address"
              name="address"
              class="
                block
                mt-1
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-gray-400
              "
              v-model="form.address"
            />
          </div>
        </div>

        <div>
          <label for="website" class="block text-sm font-medium text-gray-700">
            Website
          </label>
          <div class="mt-1">
            <input
              type="text"
              id="website"
              name="website"
              class="
                block
                mt-1
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-gray-400
              "
              v-model="form.website"
            />
          </div>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="
        inline-flex
        items-center
        px-4
        py-2
        text-xs
        font-semibold
        tracking-wider
        uppercase
        text-white
        bg-gray-800
        border border-transparent
        rounded-md
        hover:bg-gray-700
        focus:outline-none focus:shadow-outline
      "
    >
      Create
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";
import useCompanies from "../../composables/companies";

export default {
  setup() {
    const { errors, storeCompany } = useCompanies();

    const form = reactive({
      name: "",
      email: "",
      address: "",
      website: "",
    });

    const saveCompany = async () => {
      await storeCompany({ ...form });
    };

    return {
      errors,
      form,
      saveCompany,
    };
  },
};
</script>