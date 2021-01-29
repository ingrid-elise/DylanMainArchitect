<template>
  <div class="cardShellCove" v-show="visibleSlideShellCove === index"> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardShellCove",
  props:['visibleSlideShellCove', 'index'],
};
</script>

<style>

</style>