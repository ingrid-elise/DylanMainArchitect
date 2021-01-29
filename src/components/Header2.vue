<template>
<div>
<!-- Mobile Nav -->
     
  <div id="bodyMobile">
    <header class="headerMob" id="headerMobBlack">
      <div id="headerBlack">
  
    <input class="menu-btn" type="checkbox" id="menu-btn"/>
  
    <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
  
     <ul class="menu">
       <router-link tag="li" class="firstNavLink" to="/"
          ><a>home</a></router-link>
       <router-link tag="li" class="secondNavLink" to="/myprocess"
          ><a>design process</a></router-link>
       <router-link tag="li" class="thirdNavLink" to="/worktogether"
          ><a>work together</a></router-link>
     </ul>
      </div>
     </header>
    
    </div>

<!-- Website Nav -->

  <div id="headerTwoBody">
      <nav id="links" @mouseover="hoverLine = true" @mouseleave="hoverLine = false">
        <div class="verticalLinkLineTwo" v-if="!hoverLine"></div>
        <div class="verticalLinkLineHoverTwo" v-if="hoverLine"></div>
        <router-link tag="li" class="routerLink" to="/">home</router-link>
        <router-link tag="li" class="routerLink" to="/myprocess">design process</router-link>
        <router-link tag="li" class="routerLink" to="/worktogether">work together</router-link>
    </nav>
  </div>
</div>
</template>

<script>
export default {
    name: "Header2",
    data() {
    return {
        hoverLine: false,
    }
  },
}
</script>

<style scoped>

#links {
  color: white;
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
.verticalLinkLineTwo::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 43px;
  margin-left: 1vw;
  border: 5px solid white;
}
nav li:hover {
    color: orange;

}
.verticalLinkLineHoverTwo::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 43px;
  margin-left: 1vw;
  border: 5px solid orange; 
}

@media (max-width: 500px) {
  #headerTwoBody {
    display: none; /* hides main header */
  }
  #bodyMobile {
    margin: 0;
    padding: 0;
    background-color: black;
  }
  #headerBlack {
    background-color: black;
  }
  #headerMobBlack {
    padding-top: 20px;
    top: 0px;
    background-color: black;
  }

}

</style>

