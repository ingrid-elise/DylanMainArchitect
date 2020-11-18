<template>
  <div class="home">
    <Header />
    <ProjectTitle />
    <carousel @next="next">
      <card v-for="(card,index) in cards" :key="card" :index="index" :visibleSlide="visibleSlide">
        <img :src="card" />
      </card>
    </carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ProjectTitle from "@/components/ProjectTitle.vue";
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/Card.vue"

export default {
  name: "Home",
  components: {
    Header,
    ProjectTitle,
    Carousel,
    Card    
  },
  data() {
    return {
      cards: [
        'https://i.pinimg.com/originals/69/8b/6e/698b6e821c9d34010dce26e75edc8239.jpg',
        'https://i.pinimg.com/originals/3c/2f/80/3c2f80274a94c160a48384abf5c3d9e9.jpg'        
        
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
</style>