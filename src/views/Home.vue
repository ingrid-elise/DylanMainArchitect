<template>
  <div class="home">
    <Header />
    <ProjectTitle />
  <!-- Carousel for Fulham Rd -->
    <div id="fulhamRd">
    <carousel @next="next">
      <card v-for="(card,index) in cards" :key="card" :index="index" :visibleSlide="visibleSlide">        
        <img :src="card" id="fulhamRdImgCards" />
      </card>
    </carousel>
    </div>

  <!-- Carousel for Treehouse -->
    <ShortLine />
    <div id="woodmansTreehouse">
    <carouselTreehouse @nextTreehouseImg="nextTreehouseImg">
      <card v-for="(woodmansTreehouseCard,index) in woodmansTreehouseCards" :key="woodmansTreehouseCard" :index="index" :visibleSlide="visibleSlide">
        <img :src="woodmansTreehouseCard" id="woodmansTreehouseImgCards" />
      </card>
    </carouselTreehouse>
    </div>

  <!-- Carousel for  -->

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ShortLine from "@/components/ShortLine.vue";
import ProjectTitle from "@/components/ProjectTitle.vue";
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/Card.vue"
import CarouselTreehouse from "@/components/CarouselTreehouse.vue";

export default {
  name: "Home",
  components: {
    Header,
    ShortLine,
    ProjectTitle,
    Carousel,
    Card,
    CarouselTreehouse,    
  },
  data() {
    return {
      cards: [
        require('../assets/FulhamRd/FulhamRd.jpg'),
        require('../assets/FulhamRd/FulhamRd2.jpg'),
        require('../assets/FulhamRd/FulhamRd3.jpg'),
        require('../assets/FulhamRd/FulhamRd4.jpg'),
        require('../assets/FulhamRd/FulhamRd5.jpg')
      ],
      woodmansTreehouseCards: [
        require('../assets/WoodmansTreehouse/WoodmansTreehouse.jpg'),
        require('../assets/WoodmansTreehouse/WoodmansTreehouse2.jpg'),
        require('../assets/WoodmansTreehouse/WoodmansTreehouse3.jpg')
      ],
      visibleSlide: 0, //this means in the beginning show me the first slide
    };
  },
  // need separate computed and methods for moving through slides as arrays have different amounts of cards
  computed: {
    slidesLen(){
      return this.cards.length;
    },
    slidesLenTreehouse(){
      return this.woodmansTreehouseCards.length;
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
      if (this.visibleSlide >= this.slidesLenTreehouse - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      } 
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.home {
  height: 90vh;
}

#woodmansTreehouse {
  margin-top: 20vh;
}

/* changes height of Fulham Rd carousel img's */
#fulhamRdImgCards { 
  height: 62vh;
}
</style>