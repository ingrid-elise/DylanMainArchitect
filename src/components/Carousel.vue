<template>
  <div class="main-block">
    <div id="card-and-desc">

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
          
          <div class="linesMob">
          <div class="shortLineProjectNameMobile"></div>
          <div class="longLineProjectNameMobile"></div>
          </div>
        </div>
      </div>

      <div
        class="card-carousel"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <slot></slot>
        <button @click="next" class="next" id="blackButton">
          <img src="../assets/White Forward Button icon.png" alt="WhiteArrowButton" id="whiteArrowButton" :style="styleForArrow">
        </button>
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
      styleForArrow: {
        width: '4vw',
      }
    };
  },
  methods: {
    next() {
      this.$emit("next");
    },
  },
};
</script>

<style>
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
  margin-top: 3vh;
  margin-left: 3vw;
  width: 60vw;   /* fixed the img resizing problem w this, gave the entire flex box a width so the img stays within this */
  right: 0;
  height: auto;
}
#project-info {
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
  width: 100vw;
  padding-bottom: 0vh;
}

.line {
  position: absolute;
  width: 31.7vw;
  height: 0px;
  margin-left: 0vw;
  border-bottom: 1px solid black;
}

.projectName {
  height: 32vh;
  padding-top: 28.4vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.projectName:after { 
  content: "";
  width: 0px;
  height: 71.5vh;
  border-right: 1px solid black; 
  position: absolute;
  margin-left: 31.65vw;  /* changed from 32.65 */
}

#address-1 {
  margin-top: 10.5vh;
}

.projectDescription {
  padding-top: 30vh;
  margin-right: 6vw; 
  /* width: 31.7vw; */
}

.flexboxLine{
  display: flex;
  flex-direction: row;
}

.verticalLine::after { 
  content: "";
  width: 0px;
  height: 50.3vh; 
  border-right: 1px solid black;
  position: absolute;
  margin-left: 31.65vw;
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
  margin-left: 3vw; /* this was 6vw, changed so when screen is smaller */

}
.card-icon:hover + #description-1 {
  display: block;
}

#description-1 {
  margin-top: 20.2vh;  /* change this to adjust movement of treehouse carousel */
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

#blackButton {
  height: 68vh;
}

button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}

@media (max-width: 1500px) { /* 19" Desktop */
#blackButton {
  height: 58vh;
}
.projectName:after { 
  content: "";
  width: 0px;
  height: 61vh; /* adjusted */
  border-right: 1px solid black; 
  position: absolute;
  margin-left: 31.65vw;
}
#address-1 {
  margin-top: 0.5vh;
}
.projectDescription {
  padding-top: 21vh;
  margin-right: 6vw; 
}
.verticalLine::after { 
  content: "";
  width: 0px;
  height: 41.3vh; 
  border-right: 1px solid black;
  position: absolute;
  margin-left: 31.65vw;
}

}

@media (max-width: 1400px) { /* 15" Notebook */
#blackButton {
  height: 64vh;
}
.projectName:after { 
  content: "";
  width: 0px;
  height: 67vh; /* adjusted */
  border-right: 1px solid black; 
  position: absolute;
  margin-left: 31.65vw;
}
#address-1 {
  margin-top: 6.5vh;
}
.projectDescription {
  padding-top: 25vh;
  margin-right: 6vw; 
}
.verticalLine::after { 
  content: "";
  width: 0px;
  height: 45.3vh; 
  border-right: 1px solid black;
  position: absolute;
  margin-left: 31.65vw;
}
}

@media (max-width: 1300px) { /* 13" Notebook */
#blackButton {
  height: 60vh;
}
.projectName:after { 
  content: "";
  width: 0px;
  height: 63vh; /* adjusted */
  border-right: 1px solid black; 
  position: absolute;
  margin-left: 31.65vw;
}
#address-1 {
  margin-top: 2.5vh;
}
.projectDescription {
  padding-top: 16vh;
  margin-right: 6vw; 
}
.verticalLine::after { 
  content: "";
  width: 0px;
  height: 36.3vh; 
  border-right: 1px solid black;
  position: absolute;
  margin-left: 31.65vw;
}
}

@media (max-width: 1100px) { /* 12" Netbook */
#blackButton {
  height: 48vh;
}
.projectName {
  height: 22.5vh;
  padding-top: 28.4vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.projectName:after { 
  content: "";
  width: 0px;
  height: 52vh; /* adjusted */
  border-right: 1px solid black; 
  position: absolute;
  margin-left: 31.6vw;
}
#address-1 {
  margin-top: 0vh;
}
.projectDescription {
  padding-top: 8vh;
  margin-right: 6vw; 
  font-size: 12px;
}
.verticalLine::after { 
  content: "";
  width: 0px;
  height: 28.3vh; 
  border-right: 1px solid black;
  position: absolute;
  margin-left: 31.6vw;
}
}

@media (max-width: 500px) { /* Mobile */
  .line {
  display: none;
}
.verticalLine::after { 
  display: none;
}
.projectName:after { 
  display: none;
}
  .card-carousel {
  /* margin-left: 10vw; */
  margin-left: 0vw;
  margin-top: 0px;
  width: 100vw;
}
#card-and-desc {
  display: flex;
  flex-direction: column-reverse;
}
#project-info {
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  width: 90vw;
}
 .card-carousel #project-info {
   clear: both;
 }
#address-1 {
  margin-top: 0vh;
  margin-bottom: 5vh;
}
.projectName {
  padding-top: 0vh;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
#blackButton {
  height: 30vh;
}
button {
  width: 10vw;
}
/* #whiteArrowButton {
  width: 62vw;
} */
.projectDescription {
  padding-top: 0vh;
  margin-top: 0vh;
  font-size: 14px;
}
#description-1 {
  margin-top: 1vh;
  margin-bottom: 5vh;
}
.linesMob {
  display: flex;
  flex-direction: column-reverse;
}
.longLineProjectNameMobile{
  width: 85vw;
  height: 0px;
  margin-left: 0vw;
  border-bottom: 1px solid black;
  padding-top: 5px; /* adds space between line and project title - how much? */
}
.shortLineProjectNameMobile{
  width: 15vw;
  height: 0px;
  margin-left: 0vw;
  border-bottom: 5px solid black;
}

}
</style>