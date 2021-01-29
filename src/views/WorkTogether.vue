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

    <div class="contactForm"  @mouseover="showBorder = true" @mouseleave="showBorder = false" :class="{active:showBorder}">
        <h2 id="contactFormTitle">book me</h2>
        <form id="form" method="POST" class="form" action="https://formspree.io/f/mnqogdwd">
        <!-- Form Name Input -->
        <label for="name" class="label-name">
            <span class="content-name">Your Name:</span>
        </label>
        <input name="name" type="text" required>
        <div class="shortLineBelow"></div>

        <!-- Form Email Input -->
        <label for="email" class="label-name">
            <span class="content-email">Your Email:</span>
        </label>
        <input name="email" type="email" required>
        <div class="shortLineBelow"></div>

        <!-- Form Message Input -->
        <label for="message" class="label-name">
            <span class="content-email">Message:</span>
        </label>
        <textarea name="message" rows="10"></textarea>
        <div class="shortLineBelow"></div>

        <!-- Form Submit Button -->
        <div id="buttonDiv">
        <button id="contactUsButton" type="submit" v-on:click="submit">SUBMIT</button>
        </div>

      </form>
    </div>

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

export default {
    name: "WorkTogether",
    data(){
        return {
            showBorder: false,            
        }
    },
    components: {
        Header3,
    },
    methods: {
        submit(){
            alert ("Your submission was sent")
        }
    },
};
</script>

<style scoped>
#contactUsPage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    padding-top: 20vh;
    margin-left: 6vw;
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

#contactFormTitle {
    text-align: left;
    margin-left: 1vw;
    padding-top: 5vh;
}
.contactForm {
    margin-right: 6vw;
    border-style: solid;
    border-width: 1px;
    padding: 30px;
}

.active {
    margin-right: 6vw;
    border-style: solid;
    border-color: orange;
    border-width: 1px;
    padding: 30px;
}

.topLine {
  position: absolute;
  width: 50vw;
  height: 0px;
  left: 6vw;
  border-bottom: 1px solid black;
}

.shortTopLine {
  position: absolute;
  width: 100px;
  height: 0px;
  left: 6vw;
  border: 5px solid black;
}
#yellowBackButton {
  width: 3vw; /* width of arrow img */
  margin-top: 5vh;
}
#pulseLeftArrow {
  position: absolute;
  z-index: 9999;
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

/* form  */

#form {
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 40vh;
    text-align: left;
    padding:10px;
    margin-top: 3vh;
}

input, textarea {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 10px;
    margin-bottom: 0px;
    color: #6e6e6e;
    outline: 0;
    border-width: 0 0 1px;
    border-color: black;
}

.shortLineBelow {
  width: 100px;
  height: 0px;
  border: 5px solid #000000;
}

input:focus, textarea:focus {
    border-color: #FFAB48;
    /* transform: translateX(100%);
    transition: transform 0.3s ease; */
}
.content-name::after {
    content: "";
    /* border-bottom: 3px solid #969696; */
    /* border-bottom: 3px solid blue; */
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}
.content-name {
    transition: all 0.3s ease;
}
.label-name { 
    padding-top: 10px;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 14px;
    color: #FFAB48;
}
.form input:focus + .label-name::after, .form input:valid + .label-name::after {
  transform: translateX(0%);
}
#contactUsButton {
    width: 10vw;
    padding: 10px 45px;
    border: none;
    cursor: pointer;
    margin-top: 62px;
}
#buttonDiv {
    display: flex;
    justify-content: center;
    align-items: center;
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
#contactUsText {
    text-align: left;
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
}
.contactForm {
    margin: 5vh 5vw 10vw 5vw;
    border-style: solid;
    border-width: 1px;
    padding: 10px;
}
#contactFormTitle {
    text-align: left;
    margin-left: 0vw;
    margin-top: 0vh;
    padding-top: 2vh;
}
#form {
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 45vh;
    text-align: left;
    padding: 10px;
    margin-top: 0vh;
    padding-right: 0vw;
}
.shortLineBelow {
  width: 60px;
  height: 0px;
  border: 5px solid #000000;
}
input, textarea {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 10px;
    margin-bottom: 0px;
    color: #FFAB48;
    outline: 0;
    border-width: 0 0 1px;
    border-color: black;
}
textarea {
    margin-top: 20px;
    border-width: 0 0 1.5px;
    
}
#contactUsButton {
    width: 20vw;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 45px;
    padding-right: 95px;
    border: none;
    cursor: pointer;
    margin-top: 10vh;
    margin-bottom: 5vh;
}
}
</style>
