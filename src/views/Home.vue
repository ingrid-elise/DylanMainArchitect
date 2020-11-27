<template>
  <div class="home">
    <Header />
    <ProjectTitle />
    <carousel @next="next">
      <card v-for="(card,index) in cards" :key="card" :index="index" :visibleSlide="visibleSlide">
        <img :src="card" />
      </card>
    </carousel>

    <ShortLine />
    <div id="woodmansTreehouse">
    <carouselTreehouse @next="next">
      <card v-for="(woodmansTreehouseCard,index) in woodmansTreehouseCards" :key="woodmansTreehouseCard" :index="index" :visibleSlide="visibleSlide">
        <img :src="woodmansTreehouseCard" />
      </card>
    </carouselTreehouse>
    </div>
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
        'https://live.staticflickr.com/65535/50643083596_3b80759c9a_k.jpg',
        'https://live.staticflickr.com/65535/50642330843_d8d8944e19_k.jpg',
        'https://live.staticflickr.com/65535/50643166677_6ca1707743_k.jpg',
        'https://live.staticflickr.com/65535/50642333373_5662193cb0_k.jpg',
        'https://live.staticflickr.com/65535/50642334363_86112d3164_k.jpg' 
      ],
      woodmansTreehouseCards: [
        'https://live.staticflickr.com/65535/50642629413_ca9bba1f44_b.jpg',
      ],
      visibleSlide: 0,
    };
  },
  computed: {
    slidesLen(){
      return this.cards.length;
    }
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
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

img {
  height: 68vh;
  width: 55vw;
}

#woodmansTreehouse {
  margin-top: 24vh;
}
</style>