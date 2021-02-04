<template>
  <div class="home">
    <Header />
    <ProjectTitle />

  <!-- Carousel for Fulham Rd -->
    <div id="fulhamRd" class="projectBlock">
     <carousel @next="next" >
      <card v-for="(card,index) in cards" :key="card" :index="index" :visibleSlide="visibleSlide">        
        <img :src="card" id="fulhamRdImgCards" class="projectImgCards"/>
      </card>
    </carousel>
    </div>

  <!-- Carousel for Treehouse -->
    <ShortLine />
    <div id="woodmansTreehouse" class="projectBlock" v-scrollanimation>
    <carouselTreehouse @nextTreehouseImg="nextTreehouseImg">
      <cardTreehouse v-for="(woodmansTreehouseCard,index) in woodmansTreehouseCards" :key="woodmansTreehouseCard" :index="index" :visibleSlideTreehouse="visibleSlideTreehouse">
        <img :src="woodmansTreehouseCard" id="woodmansTreehouseImgCards" class="projectImgCards"/>
      </cardTreehouse>
    </carouselTreehouse>
    </div>

  <!-- Carousel for ShellCove  -->
    <ShortLine />
    <div id="shellCove" class="projectBlock" v-scrollanimation>
      <carouselShellCove @nextShellCoveImg="nextShellCoveImg">
        <cardShellCove v-for="(shellCoveCard,index) in shellCoveCards" :key="shellCoveCard" :index="index" :visibleSlideShellCove="visibleSlideShellCove">
          <img :src="shellCoveCard" id="shellCoveImgCards" class="projectImgCards"/>
          </cardShellCove>
      </carouselShellCove>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ShortLine from "@/components/ShortLine.vue";
import ProjectTitle from "@/components/ProjectTitle.vue";
import Footer from "@/components/Footer.vue"

import Card from "@/components/Card.vue";
import CardTreehouse from "@/components/CardTreehouse.vue";
import CardShellCove from "@/components/CardShellCove.vue";

import Carousel from "@/components/Carousel.vue";
import CarouselTreehouse from "@/components/CarouselTreehouse.vue";
import CarouselShellCove from "@/components/CarouselShellCove.vue";

import ScrollAnimation from '@/directives/scrollanimation.js';

export default {
  name: "Home",
  components: {
    Header,
    ShortLine,
    ProjectTitle,
    Footer,

    Card,
    CardTreehouse,
    CardShellCove,

    Carousel,
    CarouselTreehouse,
    CarouselShellCove,    

    ScrollAnimation,

  },
  data() {
    return {  
      cards: [
        require('../assets/FulhamRd/Architect_Fulham Road_2400x1600px_01.jpg'),
        require('../assets/FulhamRd/Architect_Fulham Road_2400x1600px_02.jpg'),
        require('../assets/FulhamRd/Architect_Fulham Road_2400x1600px_03.jpg'),
        require('../assets/FulhamRd/Architect_Fulham Road_2400x1600px_04.jpg'),
        require('../assets/FulhamRd/Architect_Fulham Road_2400x1600px_05.jpg')
      ],
      woodmansTreehouseCards: [
        require('../assets/WoodmansTreehouse/Architect_Wood Treehouse_2400x1600px_01.jpg'),
        require('../assets/WoodmansTreehouse/Architect_Wood Treehouse_2400x1600px_03.jpg'),
        require('../assets/WoodmansTreehouse/Architect_Wood Treehouse_2400x1600px_04.jpg'),
        require('../assets/WoodmansTreehouse/Architect_Wood Treehouse_2400x1600px_05.jpg'),
        require('../assets/WoodmansTreehouse/Architect_Wood Treehouse_2400x1600px_06.jpg'),
        require('../assets/WoodmansTreehouse/Architect_Wood Treehouse_2400x1600px_07.jpg')
      ],
      shellCoveCards: [
        require('../assets/ShellCove/Architect_ShellCove_2400x1600px_1.jpg'),
        require('../assets/ShellCove/Architect_ShellCove_2400x1600px_2.jpg')
      ],
      visibleSlide: 0, //this means in the beginning show me the first slide
      visibleSlideTreehouse: 0,
      visibleSlideShellCove: 0,
    };
  },
  // need separate computed and methods for moving through slides as arrays have different amounts of cards
  computed: {
    slidesLen(){
      return this.cards.length;
    },
    slidesLenTreehouse(){
      return this.woodmansTreehouseCards.length;
    },
    slidesLenShellCove(){
      return this.shellCoveCards.length;
    }
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    nextTreehouseImg() {
      if (this.visibleSlideTreehouse >= this.slidesLenTreehouse - 1) {
        this.visibleSlideTreehouse = 0;
      } else {
        this.visibleSlideTreehouse++;
      } 
    },
    nextShellCoveImg(){
      if (this.visibleSlideShellCove >= this.slidesLenShellCove - 1) {
        this.visibleSlideShellCove = 0;
      } else {
        this.visibleSlideShellCove++;
      } 
    }
  },  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.home {
  padding: 0;
  margin: 0;
  width: 100%;
}
.projectBlock {
  width: 100%;
  display: inline-block;
}
.projectImgCards {
  height: 68vh; /* changes height of project carousel img's */
  width: auto;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
@media (max-width: 1500px) { /* 19" Desktop */
.projectImgCards {
  height: 58vh;
  width: auto;
}
}

@media (max-width: 1400px) { /* 15" Notebook */
.projectImgCards {
  height: 64vh;
  width: auto;
}
}

@media (max-width: 1300px) { /* 13" Notebook */
.projectImgCards {
  height: 60vh;
  width: auto;
}
}

@media (max-width: 1100px) { /* 12" Netbook */
.projectImgCards {
  height: 48vh;
  width: auto;
}
}

@media (max-width: 500px) { /* Mobile */
.projectImgCards {
  height: 30vh;
  width: auto;
  float: right;
}
#shortLine2 {
  display: none;
}
.projectBlock {
  padding: 1rem 0rem;
}
}

</style>