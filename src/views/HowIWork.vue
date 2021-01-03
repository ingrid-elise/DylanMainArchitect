<template>
<div>

      <Header />


  <div id="contactUsPage">
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

    <div id="contactForm">
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
        <textarea name="message" rows="6"></textarea>
        <div class="shortLineBelow"></div>

        <!-- Form Submit Button -->
        <div id="buttonDiv">
        <button id="contactUsButton" type="submit" v-on:click="submit">SUBMIT</button>
        </div>

      </form>
    </div>


  </div>
</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    name: "HowIWork",
    components: {
        Header,
    },
    methods: {
        submit(){
            alert ("Your submission was sent")
        }
    },
    data(){
        return {
        }
    }

};
</script>

<style>
#contactUsPage{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20vh;
    color: black;
}

.contactUsHeading {
    text-align: left;
    margin-left: 3vw;
    margin-top: 1vh;
}

#contactUsText{
    text-align: center;
    width: 40vw;
}

#smallText {
    margin-top: 2vh;
    margin-bottom: 2vh;
    text-align: left;
}

#contactFormTitle {
    text-align: left;
    margin-left: 1vw;
    margin-top: 1vh;
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
    color: #969696;
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
    border-color: lightgrey;
    /* border-color: pink;
    transform: translateX(100%);
    transition: transform 0.3s ease; */
}

.content-name::after {
    content: "";
    /* border-bottom: 3px solid #969696; */
    border-bottom: 3px solid blue;
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
    /* color: #969696; */
    color: orange;
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
</style>