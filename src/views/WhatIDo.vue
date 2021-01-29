<template>
<div>
  <div class="about">
    <Header2 @hoverIn="textColour" @hoverOut="textColourTwo" />

    <div id="whatIDoText">
      <div class="topLine"></div>
      <div class="shortTopLine"></div>
      <div id="flexBoxForTextAndImg">
      <div id="flexBoxForText">

    <div id="aboutMe">
    <h1>our philosophy,</h1>
    <p>
      I’m a professionally qualified, registered Architect who has been nurtured in leading architectural practices and who is commercially minded and committed to high quality, design led architecture that enhances the urban and natural environments.
    </p>
    <p>
      I have contributed to the delivery of a diverse range of national and international projects from small to large scale, high profile developments. These have included high-rise residential towers, private residences, commercial and mixed use developments, landmark bridges, infrastructure and urban design projects, and smaller scale domestic architecture and refurbishment projects.
    </p>
    </div>
    <div id="secondColFlexbox">
    <div id="passionateAbout">
      <h1>our background,</h1>
      <p>
        Creating spaces which... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
    </div>
    <div id="theWayIWork">
      <h1>what inspires us,</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
    </div>
    </div>



    </div>

<div id="photo">
      <img src="https://static.wixstatic.com/media/dca401_41b72e8e63ae463c902c537d61956bc8~mv2.jpg/v1/fill/w_600,h_642,al_c,q_85,usm_0.66_1.00_0.01/dca401_41b72e8e63ae463c902c537d61956bc8~mv2.webp">
      <p id="imgText">Qualifications: BA Hons, M.Arch, Dip Arch, ARB Advanced Diploma in Professional Practice in Architecture</p>
      </div>
      </div>

      <div id="yellowArrowBox">
      <div id="pulseLeftArrow">
      <router-link to="/"><img src="../assets/yellowbackbutton.png" id="yellowBackButton"></router-link>
      </div>
      </div>

    </div>

  </div>
  </div>
</template>

<script>
import Header2 from "@/components/Header2.vue";

export default {
  name: "WhatIDo",
  components: {
    Header2,
  },
  data() {
    return {
      hover: false,
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.about {
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  height: 100vh;
}

#whatIDoText {
  color: white;
  margin-top: 25vh;
  margin-left: 6vw;
  margin-right: 6vw;
}

.topLine {
  position: absolute;
  width: 60vw;
  height: 0px;
  border-bottom: 1px solid white;
}

.shortTopLine {
  position: absolute;
  width: 100px;
  height: 0px;
  border: 5px solid white;
}

#flexBoxForTextAndImg {
  display: flex;
  flex-direction: row;
}

#flexBoxForText {
  display: flex;
  flex-direction: row;
  width: 90vw;
  padding-top: 4vh;
}

#aboutMe {
  width: 30vw;
}

#secondColFlexbox {
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  width: 30vw;
}

img {
  width: 24vw;
  height: auto;
  margin-left: 2vw;
  margin-right: 6vw;
}

#imgText {
  margin-left: 2vw;
  margin-right: 6vw;
  font-size: small;
}

#yellowBackButton {
  width: 3vw; /* width of arrow img */
  margin-top: 5vh;
}
#pulseLeftArrow {
  position: absolute;
  z-index: 9999;
	margin-left: 3vw; 
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


@media (max-width: 500px) { /* Mobile */
  .about {
  display: flex;
  flex-direction: column;
  color: white;
  height: 100vh;
  margin-right: 0;
}
.topLine {
  position: absolute;
  width: 90vw;
  height: 0px;
  border-bottom: 1px solid white;
}
.shortTopLine {
  position: absolute;
  width: 20vw;
  height: 0px;
  border: 4px solid white;
}
  #flexBoxForTextAndImg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  margin-left: 10vw;  
  margin-right: 0;
}
#flexBoxForText {
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding-top: 5vh;
}
#aboutMe {
  width: 80vw;
  margin-right: 10vw;
  overflow-wrap: break-word;
}

#secondColFlexbox {
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding-right: 10vw;
  margin-left: 0vw;
  margin-top: 5vh;
  overflow-wrap: break-word;
}
#whatIDoText {
  color: white;
  margin-top: 25vh;
  margin-left: 0vw;
  margin-right: 0vw;
  background-color: black;
  
}
#theWayIWork{
  margin-top: 5vh;
}
img {
  width: 76vw;
  height: auto;
  margin-top: 5vh;
  
}
#yellowBackButton {
  width: 15vw;
  background-color: black;
  margin-top: 0vh;
}
#pulseLeftArrow {
  position: absolute;
  z-index: 9999;
	margin-left: 5vw;
  color: orange;
  animation: pulseLeftArrow 2s ease-in-out infinite;
}
#yellowArrowBox{
  width: 100vw;
  height: 8vh;
  margin-top: 5vh;
  background-color: black;
}

}
</style>
