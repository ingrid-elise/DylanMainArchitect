<template>
    <div id="main-block">
    <div id="card-and-desc-shellcove">

      <!-- Project Info Text -->
      <div id="project-info">
        <div id="description-1" class="projectDescription" v-if="hover">
            <hr />
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
            <p class="projectName">Shell Cove</p>
          <hr />

          <div class="longLineProjectNameMobile"></div>
          <div class="shortLineProjectNameMobile"></div>
        </div>
      </div>

         <!-- Project Carousel -->
      <div
        class="card-carousel"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
      <div class="verticalLine" v-if="!hover"></div>
      <div class="verticalLineHover" v-if="hover"></div>
        <slot></slot> 
        <button @click="nextShellCoveImg" class="next" id="blackButton">
          <img src="../assets/White Forward Button icon.png" alt="WhiteArrowButton" id="whiteArrowButton" :style="styleForArrow">
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselShellCove",
  data() {
    return {
      hover: false,
      styleForArrow: {
        width: '3vw',
      }
    };
  },
  methods: {
    nextShellCoveImg(){
        this.$emit("nextShellCoveImg");
    }
  },
}
</script>

<style>
#card-and-desc-shellcove {
  display: grid;
  grid-template-columns: 1.3fr 1.7fr;
  width: auto;
  padding-bottom: 10vh; /* adds padding between projects */
  box-sizing: border-box; /* ensures padding and border are included in the total width and height of the elements. */
}

@media (max-width: 768px) { /* iPads, Tablets */
  .line-treehouse {
  display: none;
}
.verticalLine-treehouse::after {
  display: none;
}
.projectName-treehouse:after { 
  display: none;
}
#address-1 {
  margin-top: 0vh;
  margin-bottom: 5vh;
}
#card-and-desc-shellcove {
  display: flex;
  flex-direction: column-reverse;
}
}

@media (max-width: 500px) { /* Mobile */
#address-1 {
  margin-top: 0vh;
  margin-bottom: 5vh;
}
#card-and-desc-shellcove {
  display: flex;
  flex-direction: column-reverse;
}
}

</style>