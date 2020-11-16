<template>
  <div class="card" v-show="visibleSlide === index">
    <!-- <img
      class="card-icon"
      :src="require(`@/assets/${imgName}`)"
      alt="card icon"
    /> -->
    <!-- <img
    src="https://ukwest1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fonformarchitecture-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!PWgQ_qPsTUKItkoTkTae4XKXyITp-PRFrOJMDcfOA9u1dqsO2y3vRoeLTRssHbGp%2Fitems%2F01TNSPL2HSUGWQR4N4FRHJXC2A246KBINI%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvb25mb3JtYXJjaGl0ZWN0dXJlLW15LnNoYXJlcG9pbnQuY29tQDJhYjM0NDY0LWExYmQtNDBjYy1iMmY2LWU0NTg5YzU2M2I1MyIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2MDUxNTAwMDAiLCJleHAiOiIxNjA1MTcxNjAwIiwiZW5kcG9pbnR1cmwiOiJJaUFsWVRBK1FJNnhueG1oZVU1TXFybi9IKzhoMTJZNDM0RlR3cjBENUtzPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI4IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWm1VeE1EWTRNMlF0WldOaE15MDBNalJrTFRnNFlqWXROR0V4TXpreE16WTVaV1V4IiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsInNoYXJpbmdpZCI6IktkY1krR1RTdzBLUUY2SENVRkE4K2ciLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.RFhqV3pzcDkrZ2U1NjdoeUZDaHlDNnpFTU5VVVhkUlIyOFhaeEgzc01Ydz0&encodeFailures=1&srcWidth=&srcHeight=&width=2334&height=1662&action=Access"
    /> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['visibleSlide', 'index'],
//   props: {

//     // imgName: String,
//   }
};
</script>

<style >
.card-icon {
    height: 35vw;
    width: 45vw;
}

</style>