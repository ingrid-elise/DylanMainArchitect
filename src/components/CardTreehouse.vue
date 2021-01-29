<template>
  <div class="cardTreehouse" v-show="visibleSlideTreehouse === index"> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardTreehouse",
  props:['visibleSlideTreehouse', 'index'],
};
</script>

<style>

</style>