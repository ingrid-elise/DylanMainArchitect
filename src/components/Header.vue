<template>
  <div id="header">
    <div id="nameBlock">
      <h1 id="mainTitle">DYLAN MAIN</h1>
      <h1 id="mainTitleTwo">Architect</h1>
    </div>

    <nav id="headerLinks">
        <div class="verticalLinkLine">
        <router-link tag="li" class="routerLink" to="/whatido"
          >what i do</router-link>
        <router-link tag="li" class="routerLink" to="/workwithme"
          >work with me</router-link>
          </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
body {
  background-color: #FFFFFF;
}
#header {
  display: flex;
  flex-direction: row;
  margin-right: 100px;
  margin-left: 100px;
}
#nameBlock {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 30px;
}
#mainTitle {
  color: black;
  letter-spacing: 7px;
}
#mainTitleTwo {
  color: #969696;
  margin-left: 50px;
  font-size: 18px;
  font-weight: 400;
}
#headerLinks {
  color: black;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-right: 100px;
  text-align: right;
  position: absolute;
  right: 0;
}
nav {
  cursor: pointer;
  color: inherit;
}
li {
  list-style-type: none;
}
.routerLink {
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  text-align: right;
}

.verticalLinkLine::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 32px;
  left: 9.5vw;
  top: 0.1vh;
  border: 7px solid #000000;
}
</style>