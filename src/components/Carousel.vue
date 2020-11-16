<template>
<div id="main-block">
<div id="card-and-desc">
    <div class="card-carousel">
      <!-- <ArrowButton
        arrowType="left"
        @click.native="showPrevElement"
      /> -->
      <!-- <Card
        class="current-element"
        :imgName="currentElement.imgName"
        @mouseover.native="hover = true"
        @mouseleave.native="hover = false"
      /> -->
      <!-- <ArrowButton
        arrowType="right"
        @click.native="showNextElement"
      /> -->
      <slot></slot>
      <button @click="next" class="next"> next </button>
      
    </div>

    <div id="project-info">

        <div id="description-1" v-if="hover">
        <div class="line"></div>
        <div>
          <p class="descHeading">Client:</p> 
          <p class="descHeading">Architect:</p>
          <p class="descHeading">Status:</p>
          <p class="descHeading">Project Team:</p>
          <p class="descHeading">Photographer:</p>
          <p class="descHeading">Contractor:</p>
          <p class="descHeading">Contract Value:</p>
      </div>
        </div>

        <div id="address-1">
        <div class="line"></div>
        <p> 740 Fulham Rd, London </p>
        </div>
    </div>
</div>
    
  </div>
</template>
<script>
// import Card from "./Card.vue";
// import ArrowButton from "./ArrowButton";

export default {
  name: "Carousel",
  methods: {
      next(){

      },
      prev(){
          
      }
  }
//   props: { cards: Array },
//   components: { 
//       Card, 
//       ArrowButton, 
//       },

//   data() {
//     return {
//       currentElementIndex: 0,
//       component: 'address',
//       hover: false,
//     };
//   },
//   computed: {
//     currentElement() {
//       return this.cards[this.currentElementIndex];
//     },
//     reachedMaxLeft() {
//     //    return this.cards[0];
//        return this.currentElementIndex === 0;
//     },
//     reachedMaxRight() {
//         // return this.cards[0];
//       return this.currentElementIndex === this.cards.length - 1;
//     }
//   },
//   methods: {
//     showNextElement() {
//       this.currentElementIndex++;
//     },
//     showPrevElement() {
//       this.currentElementIndex--;
//     },
//     showElement(elementIndex) {
//       this.currentElementIndex = elementIndex;
//     },
    
//   }
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
  margin-top: 105px;
  position: absolute;
  right: 0;
}

#project-info {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    padding-top: 50vh;
}

.line {
  position: absolute;
  width: 32vw;
  height: 0px;
  left: 100px;
  border: 1px solid #000000;
}

#address-1 {
    margin-left: 100px;
}

.card-icon:hover +#description-1 {
    display: block;
}

.card-icon:hover +#address-1 {
    display: none;
}

button {
    background-color: black;
    color: white;
    border: none;
    height: 300px;
}
button:focus, button:hover {
    background-color: #969696;
    outline: none;
    cursor: pointer;
}

</style>