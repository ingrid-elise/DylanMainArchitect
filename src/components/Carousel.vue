<template>
<div id="main-block">
<div id="card-and-desc">
    <div class="card-carousel" @mouseover="hover = true" @mouseleave="hover = false">
      <slot></slot>
      <button @click="next" class="next">  </button>
    </div>

    <div id="project-info">

        <div id="description-1" class="projectDescription" v-if="hover">
        <div class="line"></div>
        <div class="projectDescHeading">
          <p class="descHeading">Client:</p> 
          <p class="descHeading">Architect:</p>
          <p class="descHeading">Status:</p>
          <p class="descHeading">Project Team:</p><br>
          <p class="descHeading">Photographer:</p><br>
          <p class="descHeading">Contractor:</p>
          <p class="descHeading">Contract Value:</p>
      </div>
      <div class="projectDescInfo">
        <p class="descInfo">Artemis One</p>
        <p class="descInfo">Horden Cherry Lee Architects</p>
        <p class="descInfo">Completed Sept 2018</p>
        <p class="descInfo">BMCE as Structural Engineer<br>EDP as Services Engineer</p>
        <p class="descInfo">Dennis Gilbert Photography</p><br>
        <p class="descInfo">FCM Holdings</p>
        <p class="descInfo">GBP 1m</p>
      </div>
      </div>

        <div id="address-1" v-if="!hover">
        <div class="line"></div>
        <p class="projectName"> 740 Fulham Rd, London </p>
        </div>
    </div>
</div>
    
  </div>
</template>
<script>

export default {
  name: "Carousel",
  data() {
    return {
      hover: false,
    }
  },
  methods: {
      next(){
        this.$emit('next')
      },
  }
};
</script>

<style >
#main-block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

#card-and-desc {
    display: flex;
    flex-direction: row;
}

.card-carousel {
  display: flex;
  flex-direction: row;
  margin-top: 8vh;
  position: absolute;
  right: 0;
}

#project-info {
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
    padding-top: 50vh;
    width: 60vw;
}

.line {
  position: absolute;
  width: 32vw;
  height: 0px;
  margin-left: 0vw;
  border: 1px solid #000000;
}

#address-1 {
    margin-top: 20vh;
}

.projectDescription{
  display: flex;
  flex-direction: row;
}

.descHeading{
  color: #969696;
  font-weight: bold;
}

.descInfo, .projectName {
  color: #393838;
}

.projectDescInfo{
  align-items: flex-end;
  text-align: right;
  width: 25vw;
}

.card-icon:hover +#description-1 {
    display: block;
}

.card-icon:hover +#address-1 {
    display: none;
}

button {
    background-color: black;
    color: white;
    border: none;
    height: 68vh;
    width: 6vw;
}
button:focus, button:hover {
    background-color: #393838;
    outline: none;
    cursor: pointer;
}

</style>