<template>
  <div class="main-block">

    <div id="card-and-desc">

      <div
        class="card-carousel"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <slot></slot>
        <button @click="next" class="next" id="blackButton"></button>
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
            <br />
            <p class="descHeading">Photographer:</p>
            <br />
            <p class="descHeading">Contractor:</p>
            <p class="descHeading">Contract Value:</p>
          </div>
          <div class="projectDescInfo">
            <p class="descInfo">Artemis One</p>
            <p class="descInfo">Horden Cherry Lee Architects</p>
            <p class="descInfo">Completed Sept 2018</p>
            <p class="descInfo">
              BMCE as Structural Engineer<br />EDP as Services Engineer
            </p>
            <p class="descInfo">Dennis Gilbert Photography</p>
            <br />
            <p class="descInfo">FCM Holdings</p>
            <p class="descInfo">GBP 1m</p>
          </div>
          </div>
        </div>

        <div id="address-1" v-if="!hover">
            <p class="projectName">740 Fulham Rd, London</p>
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
  margin-top: 9vh;
  position: absolute;
  right: 0;
  height: 62vh;
}

#fulhamRdImgCards {
  width: 55vw;
  height: 62vh;   /* currently img does not have original height here, only way to make the img and black button be responsive to diff. screen sizes */
}

#project-info {
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  width: 60vw;
}

.line {
  position: absolute;
  width: 32.07vw;
  height: 0px;
  margin-left: 0vw;
  border-bottom: 1px solid black;
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
  height: 67vh;
  border-right: 1px solid black; 
  position: absolute;
  margin-left: 32vw;
}

#address-1 {
  margin-top: 15.5vh;
}

.projectDescription {
  padding-top: 48vh;
  margin-right: 20vw;
}

.flexboxLine{
  display: flex;
  flex-direction: row;
}

.verticalLine::after {
  content: "";
  width: 0px;
  height: 44vh;
  border-right: 1px solid black;
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
  align-items: flex-start;
  text-align: left;
  margin-left: 9vw;
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
  width: 6vw;
}
button:focus,
button:hover {
  background-color: #393838;
  outline: none;
  cursor: pointer;
}
</style>