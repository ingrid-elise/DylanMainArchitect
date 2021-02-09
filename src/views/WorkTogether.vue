<template>
<div id="workTogetherPage">
    <Header3 />

  <div id="contactUsPage">
      <div class="topLine"></div>
      <div class="shortTopLine"></div>
    <div id="contactUsText">
      <h2 class="contactUsHeading">how i can help you</h2>
      <p id="smallText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <h2 class="contactUsHeading">prices</h2>
      <p id="smallText">
          Initial appointment: $500 p/hr<br>
          Follow up appointment: $400 p/hr <br>
          </p>
      </div>
      <ContactUsForm />
  </div>

   <div id="yellowArrowBox">
      <div id="pulseLeftArrow">
      <router-link to="/"><img src="../assets/yellowbackbutton.png" id="yellowBackButton"></router-link>
      </div>
      </div>
</div>
</template>

<script>
import Header3 from "@/components/Header3.vue";
import ContactUsForm from "@/components/ContactUsForm.vue";

export default {
    name: "WorkTogether",
    data(){
        return {
            showBorder: false,
        }
    },
    components: {
        Header3,
        ContactUsForm,
    },
};
</script>

<style scoped>
#contactUsPage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    padding-top: 25vh;
    margin-left: 5vw;
}
.contactUsHeading {
    text-align: left;
    margin-left: 3vw;
    margin-top: 1vh;
}
#contactUsText{
    text-align: center;
    width: 40vw;
    margin-top: 5vh;
}
#smallText {
    margin-top: 2vh;
    margin-bottom: 2vh;
    text-align: left;
}
.topLine {
  position: absolute;
  width: 50vw;
  height: 0px;
  left: 5vw;
  border-bottom: 1px solid black;
}
.shortTopLine {
  position: absolute;
  width: 100px;
  height: 0px;
  left: 5vw;
  border: 5px solid black;
}
#yellowBackButton {
  width: 3vw; /* width of arrow img */
  margin-top: -5vh;
  z-index: 9999;
  position: absolute;
}
#pulseLeftArrow {
  position: absolute;
  margin-left: 5vw; 
  width: 35px; 
  height: 35px;
  font-size: 35px;
  color: orange;
  animation: pulseLeftArrow 2s ease-in-out infinite;
}
@keyframes pulseLeftArrow {
		0% {
			left: 40px;		
		}
		50% {
	    left: 20px;
		}
		100% {			
			left: 40px;
		}
	}

@media (max-width: 500px){ /* Mobile */
    #workTogetherPage {
    display: flex;
    flex-direction: column;
    color: black;
    margin: 0;
    }
    #contactUsPage {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 25vh;
    margin-left: 0;
    padding-top: 0;
}
#contactUsText {
    text-align: left;
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
}
    .topLine {
    width: 90vw;
    height: 0px;
    border-bottom: 1px solid black;
}
    .shortTopLine {
    width: 60px;
    height: 0px;
    border: 5px solid black;
}
}
</style>
