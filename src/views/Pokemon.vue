<template>
  <div>

    <DataTable v-if="pokemonList.length>0" :columns="columns" :rows="pokemonList" :actions="actions" @view="viewPokemon"/>
    <div class="pagination">
      <button class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="fetchPokemonList(previous)" v-if="previous">Previous</button>
      <button class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="fetchPokemonList(next)"  v-if="next">Next</button>
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
      people:[
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        // More people...
      ],
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
      this.$router.push({ name: 'PokemonDetails', params: {id:pokemon.name}})
    },
  },

}

</script>
<style scoped>

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>