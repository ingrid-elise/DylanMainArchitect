<template>
<div>
<div id="FulhamRdCarousel">
    <!-- <button slot="next" class="nextButton"></button> -->

<carousel :nav="false" 
 :items="1.5" :margin="20" :loop="true" :mouseDrag="true" :touchDrag="true" :dots="false">
    <img :src="require('../assets/FulhamRd/FulhamRd.jpg')">
    <img :src="require('../assets/FulhamRd/FulhamRd2.jpg')">
    <img :src="require('../assets/FulhamRd/FulhamRd3.jpg')">
    <img :src="require('../assets/FulhamRd/FulhamRd4.jpg')">
    <img :src="require('../assets/FulhamRd/FulhamRd5.jpg')">

    <template slot="next"><span class="next">next</span></template>


</carousel>
</div>

</div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default {
    name: "MainCarousel",
    components: { 
        carousel,

         },
}

</script>

<style>
#FulhamRdCarousel {
    display: block;
    width: 55vw;
    margin-left: 23vw;
    margin-top: 15vh;
}

img {
    height: 55vh;
    width: auto;
}

.nextButton {
    background-color: #DDDDDD; /* or black? */
    color: white;
    border: none;
    margin-left: 56vw;
    padding-top: 0vh;
    padding-bottom: 50vh;
    padding-right: 4vw;
    cursor: pointer;
}

.nextButton:focus, .nextButton:hover {
    background-color: #393838;
    outline: none;
}

</style>