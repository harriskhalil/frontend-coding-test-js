<template>
  <li v-for="(file ,key) in pokemon" :key="key" class="relative" :class="typeof(file)=='object'?'hidden':''" >
    <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
      <img :src="file ??file" alt="" class="pointer-events-none object-cover group-hover:opacity-75 " />
    </div>
  </li>
</template>


<script>
export default {
  props:{
    pokemon:{
      type:Object
    }
  }
}
</script>
<style>
.hide{
  display: none!important;
}
</style>