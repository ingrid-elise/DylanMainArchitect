<template>
  <div id="main-block">
    <div id="card-and-desc">
    
    <!-- Project Carousel -->
      <div
        class="card-carousel-treehouse"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <slot></slot>
        <button @click="nextTreehouseImg" class="nextTreehouseImg"></button>
      </div>

      <!-- Project Info Text -->
      <div id="project-info-treehouse">
        <div class="verticalLine-treehouse" v-if="hover"></div>
        <div id="description-1" class="projectDescription-treehouse" v-if="hover">
          <div class="line-treehouse"></div>
          <div class="flexboxLine-treehouse">
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
          <div class="projectDescInfo-treehouse">
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

        <div id="address-1-treehouse" v-if="!hover">
            <p class="projectName-treehouse">Woodman's Treehouse, Dorset</p>
          <div class="line-treehouse"></div>
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
    nextTreehouseImg(){
        this.$emit("nextTreehouseImg");
    }
  },
};
</script>

<style >
.card-carousel-treehouse {
  display: flex;
  flex-direction: row;
  margin-top: 5vh;
  position: absolute;
  right: 0;
  height: 80vh;
}
#woodmansTreehouseImgCards{
  height: 80vh; 
  width: 38vw; 
}

#project-info-treehouse {
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  width: 70vw;
}

.line-treehouse {
  position: absolute;
  width: 48.1vw;
  height: 0px;
  margin-left: 0vw;
  border-bottom: 1px solid black;
}

.projectName-treehouse {
  height: 32vh;
  padding-top: 23.7vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.projectName-treehouse:after { 
  content: "";
  width: 0px;
  height: 84vh;
  border-right: 1px solid black; 
  position: absolute;
  margin-left: 48vw;
}

#address-1-treehouse {
  margin-top: 29vh;
}

.projectDescription-treehouse {
  padding-top: 52vh;
  margin-right: 27.8vw;
} 

.flexboxLine-treehouse{
  display: flex;
  flex-direction: row;
}

.verticalLine-treehouse::after {
  content: "";
  width: 0px;
  height: 51vh;
  border-right: 1px solid black;
  position: absolute;
  margin-left: 48vw;
  margin-top: 1vh;
}

.projectDescInfo-treehouse {
  align-items: flex-start;
  text-align: left;
  margin-top: 1vh;
  margin-left: 15vw;
}

</style>