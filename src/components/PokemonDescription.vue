<template>
  <li class="col-span-1 flex rounded-md shadow-sm">
    <div :class="color" class=" flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white">
      {{ initials }}</div>
    <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
      <div class="flex-1 truncate px-4 py-2 text-sm">
        <a  class="font-medium text-gray-900 hover:text-gray-600">{{ longText }}</a>
        <p v-if="value" class="text-gray-500">{{ value }}</p>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "PokemonDescription",

  props:{
    initials:{
      type:String
    },
    longText:{
      type:String
    },
    value:{
      type:Number
    },
    color:{
      type:String
    }
  }
};
</script>