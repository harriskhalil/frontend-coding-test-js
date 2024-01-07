<template>
  <table>
    <thead>
    <tr>
      <th scope="col" class="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0" v-for="column in columns" :key="column.key">{{ column.label }}</th>
      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"  v-if="actions.length">Actions</th>
    </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <tr v-for="item in rows" :key="item.name">
        <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0" v-for="column in columns" :key="column.key">
          <div class="flex items-center">

            <div class="ml-4">
              <div class="font-medium text-gray-900" >{{ item[column.key] }}</div>
            </div>
          </div>
        </td>
        <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500" v-if="actions.length">
          <button class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20" v-for="action in actions" :key="action.label" @click="performAction(action, item)">
            {{ action.label }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "DataTable",
  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    performAction(action, item) {
      this.$emit(action.action, item);
    },
  },
};
</script>
<style scoped>



</style>