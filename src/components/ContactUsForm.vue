<template>
  <div class="contactUsFormContainer" @mouseover="showBorder = true" @mouseleave="showBorder = false" :class="{active:showBorder}">
    <h2 id="contactFormTitle">book me</h2>
    <form @submit.prevent="sendEmail">
      <label id="nameLabel"></label>
      <input type="text" v-model="name" name="name" placeholder="Name" />
      <div class="shortLineBelow"></div>
      <label></label>
      <input type="email" v-model="email" name="email" placeholder="Email" />
      <div class="shortLineBelow"></div>
      <label></label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
        id="styled"
      >
      </textarea>
      <div class="shortLineBelow"></div>
      <div id="buttonDiv">
        <input type="submit" value="Send" id="contactUsButton" />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUsForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      showBorder: false,
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_60qm9kg",
          "template_j7h2stf",
          e.target,
          "user_sCz3SSuI6Na3x7QCaQuV1",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
        console.log("it works!");
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.active {
    margin-right: 6vw;
    border-style: solid;
    border-color: orange;
    border-width: 1px;
    padding: 30px;
}
#contactFormTitle {
  text-align: left;
  margin-left: 1vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
}
.contactUsFormContainer {
  margin-right: 6vw;
  border-style: solid;
  border-width: 1px;
  padding: 30px;
  width: 35vw;
}
#form {
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 40vh;
  text-align: left;
  padding: 10px;
  margin-top: 3vh;
}
input,
textarea {
  color: #6e6e6e;
  outline: 0;
  border-width: 0 0 1px;
  border-color: black;
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  resize: vertical;
  display: block;
  resize: none;
  font-family: HelveticaNeue;
}
textarea#styled {
    font-family: HelveticaNeue;
}
.shortLineBelow {
  width: 100px;
  height: 0px;
  border: 5px solid #000000;
}
input:focus,
textarea:focus {
  border-color: #ffab48;
}
#nameLabel {
  transition: all 0.3s ease;
}
.form input:focus {
  transform: translateY(-150%);
  transform: translateX(0%);
  font-size: 14px;
  color: #ffab48;
}
#contactUsButton {
  width: 10vw;
  padding: 10px 45px;
  border: none;
  cursor: pointer;
  margin-top: 62px;
  background-color: black;
  color: white;
}
#contactUsButton:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 9px 44px;
}
#buttonDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 500px){

.contactUsFormContainer {
    margin: 5vh 5vw 10vw 5vw;
    border-style: solid;
    border-width: 1px;
    padding: 10px;
    width: 90vw;
}
#contactFormTitle {
    text-align: left;
    margin-left: 0vw;
    margin-top: 0vh;
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
  margin-bottom: 2vh;
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
    padding-right: 80px;
    border: none;
    cursor: pointer;
    margin-top: 5vh;
    margin-bottom: 5vh;
}
#contactUsButton:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 44px;
  padding-right: 79px;
}
}
</style>

