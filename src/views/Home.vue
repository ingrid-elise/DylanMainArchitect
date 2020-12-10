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
        'https://live.staticflickr.com/65535/50663866581_1d87288f23_o.jpg',
        'https://live.staticflickr.com/65535/50663140418_042d5362a9_o.jpg',
      ],
      woodmansTreehouseCards: [
        'https://live.staticflickr.com/65535/50642629413_ca9bba1f44_b.jpg',
        'https://live.staticflickr.com/65535/50642631118_8023e3c165_b.jpg',
        'https://live.staticflickr.com/65535/50643384371_7686edddfc_b.jpg',
        'https://live.staticflickr.com/65535/50642632718_79f1cf0999_o.jpg',
        'https://live.staticflickr.com/65535/50642633608_0f56dd3ca7_z.jpg',
        'https://live.staticflickr.com/65535/50643467852_5385be391c_z.jpg',
        'https://live.staticflickr.com/65535/50643387736_1d9869091d_z.jpg',
      ],
      visibleSlide: 0,
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
/* #fulhamRdImgCards{
  height: auto;  
  width: 55vw;  changes img height for fulham rd  carousel imgs
} */
/* changes img height for woodmans treehouse carousel imgs */
/* #woodmansTreehouseImgCards{
  height: 80vh;  
} */
#woodmansTreehouse {
  margin-top: 20vh;
}
</style>