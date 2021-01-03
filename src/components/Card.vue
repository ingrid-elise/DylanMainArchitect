<template>
  <div class="card" v-show="visibleSlide === index"> 
    <slot></slot>
  </div>

  
</template>

<script>
export default {
  name: "Card",
  props:['visibleSlide', 'index'],
};
</script>

<style>

</style>