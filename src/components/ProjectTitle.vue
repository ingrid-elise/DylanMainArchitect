<template>
  <div>
    <h2 id="projectsTitle">PROJECTS</h2>
    <div id="shortLine"></div>
  </div>
</template>

<script>

</script>

<style>
#projectsTitle {
  display: flex;
  margin-left: 6vw;
  margin-top: 11vh;
  color: black;
  letter-spacing: 7px;
}
#shortLine {
  width: 116px;
  height: 0px;
  margin-left: 37.6vw;
  border: 5px solid #000000;
}

@media (max-width: 500px) {
#projectsTitle {
  margin-left: 30px;
  margin-top: 50px;
  padding: 100px 0px 50px 0px;
  font-size: 1.5em;
  font-weight: 400;
}
#shortLine {
  display: none;
}

}
</style>