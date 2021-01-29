<template>
<div>
  <!-- Mobile Nav -->
     
  <div id="bodyMobile">
    <header class="headerMob">
      <div id="headerBlack">
  
    <input class="menu-btn" type="checkbox" id="menu-btn"/>
  
    <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
  
     <ul class="menu" id="menuWhite">
       <router-link tag="li" class="firstNavLink" to="/"
          ><a id="blackLink">home</a></router-link>
       <router-link tag="li" class="secondNavLink" to="/whatido"
          ><a id="blackLink">what i do</a></router-link>
       <router-link tag="li" class="thirdNavLink" to="/myprocess"
          ><a id="blackLink">design process</a></router-link>
     </ul>
      </div>
     </header>
    </div>

<!-- Website Nav -->

<div id="headerThreeBody">
      <nav id="headerlinks" @mouseover="hoverLine3 = true" @mouseleave="hoverLine3 = false">
        <div class="verticalLinkLineThree" v-if="!hoverLine3"></div>
        <div class="verticalLinkLineHoverThree" v-if="hoverLine3"></div>
        <router-link tag="li" class="routerLink" to="/">home</router-link>
        <router-link tag="li" class="routerLink" to="/whatido">what i do</router-link>
        <router-link tag="li" class="routerLink" to="/myprocess">design process</router-link>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
    name: "Header3",
    data() {
    return {
        hoverLine3: false,
    }
  },
}
</script>

<style scoped>

#headerlinks {
  color: black;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-right: 7vw;
  margin-bottom: 20px;
  text-align: right;
  position: absolute;
  right: 0;
}
li {
  list-style-type: none;
}
.verticalLinkLineThree::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 43px;
  margin-left: 1vw;
  border: 5px solid black;
}

nav li:hover {
    color: orange;
}

.verticalLinkLineHoverThree::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 43px;
  margin-left: 1vw;
  border: 5px solid orange;
}


@media (max-width: 500px) { /* Mobile */
  #headerThreeBody {
    display: none; /* hides main header */
  }
  #bodyMobile {
    margin: 0;
    padding: 0;
  }
  #menuWhite {
    background-color: white;
  }
  #blackLink {
    color: black;
  }
}


</style>

.headerMob ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: black;
}

 a {
  color: white;
  text-decoration: none;
  text-align: center;
}