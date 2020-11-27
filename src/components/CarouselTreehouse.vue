<template>
  <div id="main-block">
    <div id="card-and-desc">
      <div
        class="card-carousel"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <slot></slot>
        <button @click="next" class="next"></button>
      </div>

      <div id="project-info">
        <div class="verticalLine" v-if="hover"></div>
        <div id="description-1" class="projectDescription" v-if="hover">
          <div class="line" id="projectLine"></div>
          <div class="flexboxLine">
          <div class="projectDescHeading">
            <p class="descHeading">Client:</p>
            <p class="descHeading">Architect:</p>
            <p class="descHeading">Status:</p>
            <p class="descHeading">Project Team:</p>
            <p class="descHeading">Photographer:</p>
            <br />
            <p class="descHeading">Contractor:</p>
            <p class="descHeading">Contract Value:</p>
          </div>
          <div class="projectDescInfo">
            <p class="descInfo">Crafty Camping</p>
            <p class="descInfo">Onform Architecture + BEaM</p>
            <p class="descInfo">Completed July 2016</p>
            <p class="descInfo">Ecos Maclean as Structural Engineer</p>
            <p class="descInfo">Sandy Steele Perkins Photography</p>
            <br />
            <p class="descInfo">Guy Mallinson and master craftsmen</p>
            <p class="descInfo">GBP 150,000</p>
          </div>
          </div>
        </div>

        <div id="address-1" v-if="!hover">
            <p class="projectName">Woodman's Treehouse, Dorset</p>
          <div class="line"></div>
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
    };
  },
  methods: {
    next() {
      this.$emit("next");
    },
  },
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
  width: 60vw;
}

.line {
  position: absolute;
  width: 32vw;
  height: 0px;
  margin-left: 0vw;
  border: 1px solid #000000;
}

.projectName {
  height: 32vh;
  padding-top: 23.5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.projectName:after { 
  content: "";
  width: 0px;
  height: 70vh;
  border: 1px solid #000000;
  position: absolute;
  margin-left: 32vw;
}

#address-1 {
  margin-top: 20vh;
}

.projectDescription {
  padding-top: 52vh;
  /* border-right: 1px solid #000000;
  margin-right: 27.8vw; */
}

.flexboxLine{
  display: flex;
  flex-direction: row;
}

.verticalLine::after {
  content: "";
  width: 0px;
  height: 48vh;
  border: 1px solid #000000;
  position: absolute;
  margin-left: 32vw;
  margin-top: 4vh;
}

.descHeading {
  color: #969696;
  font-weight: bold;
}

.projectDescHeading, .projectDescInfo {
  margin-top: 1vh;
}

.descInfo,
.projectName {
  color: #393838;
}

.projectDescInfo {
  align-items: flex-end;
  text-align: right;
  width: 22vw;
}

.card-icon:hover + #description-1 {
  display: block;
}

.card-icon:hover + #address-1 {
  display: none;
}

button {
  background-color: black;
  color: white;
  border: none;
  height: 68vh;
  width: 6vw;
}
button:focus,
button:hover {
  background-color: #393838;
  outline: none;
  cursor: pointer;
}
</style>