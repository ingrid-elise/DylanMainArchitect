<template>
    <div id="card-and-desc">

      <div id="project-info">
        <div class="projectDescription" v-if="hover">
          <hr />
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
            <hr />
          
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
      <div class="verticalLine" v-if="!hover"></div>
      <div class="verticalLineHover" v-if="hover"></div>
        <slot></slot>
        <button @click="next" class="next" id="blackButton">
          <img src="../assets/White Forward Button icon.png" alt="WhiteArrowButton" id="whiteArrowButton" :style="styleForArrow">
        </button>
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
        width: '3vw',
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
#card-and-desc { /* everything */
  display: grid;
  grid-template-columns: 1.3fr 1.7fr;
  width: auto;
  padding-bottom: 10vh; /* adds padding between projects */
  box-sizing: border-box; /* ensures padding and border are included in the total width and height of the elements. */
}
.card-carousel { /* carousel and button */
  display: flex;
  flex-direction: row;
  width: 100%;
}
#project-info {
  margin-left: 5vw;
}
.projectName { 
  height: 67vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.1rem;
}
.verticalLine { /* Long vertical line*/
  content: "";
  width: 0px;
  height: 71vh;
  border-right: 1px solid black; 
  position: absolute;
  margin-left: -1.8vw;
  margin-top: -4vh;
}
.verticalLineHover { /* Short vertical line*/
  content: "";
  width: 0px;
  height: 50.2vh;
  border-right: 1px solid black; 
  position: absolute;
  margin-left: -1.8vw;
  margin-top: -4vh;
}
hr { /* Line below project name and above project */
  border: 0;
  height: 1px;
  background-color: black;
  width: 36.5vw; /* length of black line */
}
.projectDescription {
  padding-top: 46vh;
}
.flexboxLine{
  display: flex;
  flex-direction: row;
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
.card-icon:hover + #address-1 {
  display: none;
}
button {
  background-color: black;
  color: white;
  border: none;
  width: 13rem;
  overflow: hidden;
}
button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}

@media (max-width: 1200px) { /* Desktops, large screens */
/* #blackButton {
  height: 64vh;
}
#address-1 {
  margin-top: 6.5vh;
}
.projectDescription {
  padding-top: 25vh;
} */
/* .verticalLine { 
  height: 67vh;
}
.verticalLineHover { 
  height: 45.3vh;
} */
}

@media (max-width: 1024px) { /* Small screens, laptops */
/* #blackButton {
  height: 60vh;
}
#address-1 {
  margin-top: 2.5vh;
}
.projectDescription {
  padding-top: 16vh;
}
.verticalLine { 
  height: 63vh;
}
.verticalLineHover { 
  height: 36.3vh;
} */
}

@media (max-width: 768px) { /* iPads, Tablets */
  .line {
  display: none;
}
.verticalLine::after { 
  display: none;
}
.projectName:after { 
  display: none;
}
hr {
  display: none;
}
  .card-carousel {
  margin: 0;
  width: 100vw;
}
#card-and-desc {
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 0;
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
  width: 100vw;
}
button {
  width: 13rem;
}
.projectDescription {
  padding-top: 0vh;
  margin-top: 0vh;
  font-size: 14px;
  width: 100vw;
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

@media (max-width: 480px) { /* Mobile */
  .line {
  display: none;
}
.verticalLine::after { 
  display: none;
}
.projectName:after { 
  display: none;
}
hr {
  display: none;
}
  .card-carousel {
  margin-left: 0vw;
  margin-top: 0px;
  width: 100vw;
}
#card-and-desc {
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 0;
}
#project-info {
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  width: 90vw;
  margin-top: 2vh;
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
  width: 100vw;
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
  width: 100vw;
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