<template>
  <table>
    <thead>
    <tr>
      <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
      <th v-if="actions.length">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in rows" :key="item.name">
      <td v-for="column in columns" :key="column.key">{{ item[column.key] }}</td>
      <td v-if="actions.length">
        <button v-for="action in actions" :key="action.label" @click="performAction(action, item)">
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
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid black;
  padding: 8px;
}

th {
  background-color: #543a9d;
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}


</style>