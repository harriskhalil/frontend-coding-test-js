<template>
  <div>

    <DataTable v-if="pokemonList.length>0" :columns="columns" :rows="pokemonList" :actions="actions" @view="viewPokemon"/>
    <div class="pagination">
      <button @click="fetchPokemonList(previous)" v-if="previous">Previous</button>
      <button @click="fetchPokemonList(next)"  v-if="next">Next</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DataTable from "../components/DataTable.vue";
export default {
  data() {
    return {
      pokemonList: [],
      next:null,
      previous:null,
      columns:[
        { key: 'name', label: 'Name' },
        { key: 'url', label: 'URL' },
      ],
      actions:[
        {
          label: 'View',
          action: 'view',
        },
      ]
    };
  },
  components:{
    DataTable
  },
  created() {
    if (this.pokemonList.length===0){
      this.fetchPokemonList('https://pokeapi.co/api/v2/pokemon/');
    }
  },
  methods: {
    async fetchPokemonList(url) {
      try {
        const response = await axios.get(url);
        if(response.status===200){
          this.next= response.data.next
          this.previous = response.data.previous
          this.$toast.success('Pokemon retrieved successfully');
          this.pokemonList = response.data.results;
        }

      } catch (error) {
        this.$toast.error('Error fetching Pokemon list')
        console.error('Error fetching Pokemon list', error);
      }
    },
    viewPokemon(pokemon){
      console.log(pokemon);
    }
  },

}

</script>
<style scoped>
.pagination button {
  margin: 0 5px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: brown;
  border-radius: 5px;
}
.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>