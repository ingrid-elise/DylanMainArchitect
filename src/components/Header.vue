<template>
  <div id="nameAndLinks">

       <!-- Mobile Nav -->
<div id="bodyMobile">
    <header class="headerMob">
    <a href="/" class="logo">DYLAN MAIN<span id="architectWord">Architect</span></a>
  
    <input class="menu-btn" type="checkbox" id="menu-btn"/>
  
    <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
  
     <ul class="menu">
       <router-link tag="li" class="firstNavLink" to="/whatido"
          ><a>what i do</a></router-link>
       <router-link tag="li" class="secondNavLink" to="/myprocess"
          ><a>design process</a></router-link>
       <router-link tag="li" class="thirdNavLink" to="/worktogether"
          ><a>work together</a></router-link>
     </ul>
     </header>
</div>
       <!-- Website Header & Nav -->
    
    <div id="nameBlock">
      <h1 id="mainTitle">DYLAN MAIN</h1>
      <h1 id="mainTitleTwo">Architect</h1>
    </div>
    

<div id="navWebsite">
    <nav @mouseover="hoverLine = true" @mouseleave="hoverLine = false">
      <div id="rightAlignText">
        <div id="linkFlexBox">
        <router-link tag="li" class="routerLink" to="/whatido"
          >what i do</router-link>
        <router-link tag="li" class="routerLink" to="/myprocess"
          >design process</router-link>
        <router-link tag="li" class="routerLink" to="/worktogether"
          >work together</router-link>
        </div>
        <div class="verticalLinkLine" v-if="!hoverLine"></div>
        <div class="verticalLinkLineHover" v-if="hoverLine"></div>
      </div>
         
    </nav>
</div>


  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      hoverLine: false,
    };
  },
};
</script>

<style>
body {
  background-color: #ffffff;
}
@media (min-width: 500px){
  #bodyMobile {
    display: none; /* hides mobile header*/
  }
  #header {
  display: flex;
  flex-direction: row;
}
#nameBlock {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 22px; /* changed from 30px */
  padding-left: 5vw;/* changed from margin */
}
#mainTitle {
  color: black;
  letter-spacing: 7px;
}
#mainTitleTwo {
  color: #969696;
  margin-left: 2vw;
  font-size: 18px;
  font-weight: 400;
}
#nameAndLinks{
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}

#rightAlignText {
  display: flex;
  flex-direction: row;
  text-align: right;
  right: 0;
  position: absolute;
  margin-right: 6vw;

}
#linkFlexBox {
  display: flex;
  flex-direction: column;
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
  flex-direction: row;
  justify-content: flex-end;
}
.verticalLinkLine::after {
  content: "";
  position: absolute;
  height: 43px; /* changed from 50px */
  border: 5px solid black;
  margin-left: 1vw;
}
nav li:hover {
  color: orange;
}
.verticalLinkLineHover::after {
  content: "";
  position: absolute;
  border: 5px solid orange; 
  height: 43px; 
  margin-left: 1vw;
}

}

@media (max-width: 500px) {
  #navWebsite {
    display: none; /* hides main header */
  }
  #nameBlock {
    display: none;
  }
  .logo {
    color: black;
  }
 a {
  color: white;
  text-decoration: none;
  text-align: center;
}
#architectWord {
  font-size: 0.8rem;
  letter-spacing: normal;
  color: grey;
  padding-left: 0.2rem;
}
.headerMob {
  background-color: white;
  position: fixed; /* keeps menu at the top */
  width: 100%;
  letter-spacing: 7px;
  z-index: 3; /* keeps menu above content */
  padding-bottom: 0px;
  padding-top: 20px;
  top: 0px;
  font-size: 1rem;
}
.headerMob ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: black;
}
.headerMob ul a {
  display: block;
  padding: 20px;
  text-decoration: none;
}
.headerMob ul a:hover {
  color: orange; 
  text-decoration: none; 
}
li {
  font-size: 20px;
}
.firstNavLink {
  padding: 150px 0px 50px 0px;
}
.secondNavLink {
  padding: 20px 0px;
}
.thirdNavLink {
  padding: 50px 0px 160px 0px;
}
.headerMob .logo {
  float: left;
  display: block;
  font-size: 2em; /* changes font size of header 'DM'*/
  padding: 10px 20px;
}
.headerMob .menu {
  clear: both; /* forces menu below the left floated logo */
  max-height: 0;
  transition: max-height .2s ease-out; /*when you click the menu it will collapse and expand. max height is 0 at first so you cant see it till you click and it will expand to new height*/
}
.headerMob .menu-icon {
  padding: 15px 20px;
  position: relative;
  float: right;
  cursor: pointer;
}
.headerMob .menu-icon .nav-icon {
  background: orange;
  display: block;
  /* height: 3px; 
  width: 40px; */
  height: 25px;
  width: 2px;
  position: relative; 
  transition: background .2s ease-out; /* part of hamburger animation */
}
.headerMob .menu-icon .nav-icon:before{
  background: orange;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  right: 10px; /* moves bar below inital - change back to top for horizontal*/
  transition: all .2s ease-out;
} /*this adds a second bar in same positon*/
.headerMob .menu-icon .nav-icon:after{
  background: orange;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: -10px; /* moves bar above inital */
  transition: all .2s ease-out;
}/*this adds a third bar in same positon*/
.headerMob .menu-btn {
  display: none;
}
.headerMob .menu-btn:checked ~ .menu { /* when the menu is checked look for its nxt available sibling w the class of 'menu' and change it's height */
  max-height: 170vh; /* changing the ht of the ul */
}
.headerMob .menu-btn:checked ~ .menu-icon .nav-icon {
  background: transparent; /* hides middle bar */
}
.headerMob .menu-btn:checked ~ .menu-icon .nav-icon:before {
  transform: rotate(-45deg); /* only rotates when checked */
  top: 0; /*moves bars to be on top of each other so when they rotate they form an X*/
}
.headerMob .menu-btn:checked ~ .menu-icon .nav-icon:after {
  transform: rotate(45deg);
  top: 0; /*moves bars to be on top of each other so when they rotate they form an X*/
}

}
</style>