<template>
<div class="blackCol">
  <button class="btn">
    <img
      class="icon"
      :src="require(`@/assets/${arrowType}.svg`)"
      :alt="arrowType + ' arrow'"
    />
  </button>
  </div>
</template>

<script>
export default {
    name: "ArrowButton",
  props: { arrowType: String }
};

</script>

<style>
.blackCol {
  height: 35vw;
  width: 100px;
  background-color: black;
  color: black;
}
</style>