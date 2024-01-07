<template>
  <main>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <img
          v-if="pokemon?.sprites?.other?.dream_world?.front_default"
          :src="pokemon.sprites.other.dream_world.front_default"
          class="mx-auto block"
          alt="Pokemon Image"
        />
        <p class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5x uppercase" v-if="pokemon?.species">{{pokemon?.name}}</p>
      </div>
      <div class="mt-10">
        <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <PokemonDescription  v-if="pokemon?.base_experience" initials="Exp." long-text="Experience" class="bg-pink-600" :value="pokemon.base_experience" />
          <PokemonDescription  v-if="pokemon?.height" initials="Ht." long-text="Height" class="bg-purple-600"  :value="pokemon.height" />
          <PokemonDescription  v-if="pokemon?.weight" initials="wt." long-text="Weight"  class="bg-yellow-500" :value="pokemon.weight" />
        </ul>
      </div>
      <div>
        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-10">
          <ImageList :pokemon="pokemon?.sprites" />
          <ImageList :pokemon="pokemon?.sprites?.other?.home" />
          <ImageList :pokemon="pokemon?.sprites?.other?.showdown" />
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import PokemonDescription from "../components/PokemonDescription.vue";
import ImageList from "../components/ImageList.vue";

export default {
  components: { ImageList, PokemonDescription },
  data(){
    return{
      pokemon:{},
      files: [
        {
          title: 'IMG_4985.HEIC',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
          title: 'IMG_4985.HEIC',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },{
          title: 'IMG_4985.HEIC',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
          title: 'IMG_4985.HEIC',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
          title: 'IMG_4985.HEIC',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },

        // More files...
      ]
    }
  },
  mounted() {
    if(this.$route.params.id){
      this.fetchPokemon(this.$route.params.id)
    }
  },
  methods:{
    async fetchPokemon(url){
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+url);
        if(response.status===200){
          this.$toast.success(this.$route.params.id.toUpperCase() +' Retrieved');
          this.pokemon = response.data;
        }

      } catch (error) {
        this.$toast.error('Error fetching'+this.$route.params.id)
        console.error('Error fetching Pokemon list', error);
      }
    }
  }
}

</script>
