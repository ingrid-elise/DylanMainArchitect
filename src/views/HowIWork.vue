<template>
<div>

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
        <form id="form" method="POST" action="https://formspree.io/f/mnqogdwd">
        <label>Your Name:</label>
        <input name="name" type="text">
        <label>Your Email:</label>
        <input name="email" type="email">
        <label>Message:</label>
        <textarea name="message" rows="5"></textarea>
        <div id="buttonDiv">
        <button id="contactUsButton" type="submit" v-on:click="submit">Submit</button>
        </div>
      </form>
    </div>


  </div>
</div>
</template>

<script>

export default {
    name: "HowIWork",
    components: {
        
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

#form {
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 40vh;
    /* border: 1px solid grey;
    border-radius: 6px; */
    text-align: left;
    padding:10px;
    margin-top: 3vh;
}

input, textarea {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
}

#contactUsButton {
    width: 10vw;
    padding: 10px 45px;
    background-color: #2c3e50;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    margin-top: 10px;
}

#buttonDiv {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* input:focus, textarea:focus {
    background-color: darkgrey;
} */

input:hover, textarea:hover {
    background-color: lightgrey;
    /* border: 1px black solid; */
    border-radius: 2px;
}
</style>