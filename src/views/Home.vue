<template>
  <div class="home">
    <Header />
    <ProjectTitle />
    <!-- <ProjectImg /> -->
    <!-- <Carousel :cards="cards" /> -->
    <carousel>
      <card v-for="(card,index) in cards" :key="card" :index="index" :visibleSlide="visibleSlide">
        <img :src="card" />
      </card>
    </carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ProjectTitle from "@/components/ProjectTitle.vue";
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/Card.vue"

export default {
  name: "Home",
  components: {
    Header,
    ProjectTitle,
    Carousel,
    Card    
  },
  data() {
    return {
      cards: [
        'https://ukwest1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fonformarchitecture-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!PWgQ_qPsTUKItkoTkTae4XKXyITp-PRFrOJMDcfOA9u1dqsO2y3vRoeLTRssHbGp%2Fitems%2F01TNSPL2DIZBDVYMVHUNEZ33KAHW25TY7Z%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvb25mb3JtYXJjaGl0ZWN0dXJlLW15LnNoYXJlcG9pbnQuY29tQDJhYjM0NDY0LWExYmQtNDBjYy1iMmY2LWU0NTg5YzU2M2I1MyIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2MDUxNTAwMDAiLCJleHAiOiIxNjA1MTcxNjAwIiwiZW5kcG9pbnR1cmwiOiJJaUFsWVRBK1FJNnhueG1oZVU1TXFybi9IKzhoMTJZNDM0RlR3cjBENUtzPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI4IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWm1VeE1EWTRNMlF0WldOaE15MDBNalJrTFRnNFlqWXROR0V4TXpreE16WTVaV1V4IiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsInNoYXJpbmdpZCI6IktkY1krR1RTdzBLUUY2SENVRkE4K2ciLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.RFhqV3pzcDkrZ2U1NjdoeUZDaHlDNnpFTU5VVVhkUlIyOFhaeEgzc01Ydz0&encodeFailures=1&srcWidth=&srcHeight=&width=2080&height=1662&action=Access',
        'https://ukwest1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fonformarchitecture-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!PWgQ_qPsTUKItkoTkTae4XKXyITp-PRFrOJMDcfOA9u1dqsO2y3vRoeLTRssHbGp%2Fitems%2F01TNSPL2HSUGWQR4N4FRHJXC2A246KBINI%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvb25mb3JtYXJjaGl0ZWN0dXJlLW15LnNoYXJlcG9pbnQuY29tQDJhYjM0NDY0LWExYmQtNDBjYy1iMmY2LWU0NTg5YzU2M2I1MyIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2MDUxNTAwMDAiLCJleHAiOiIxNjA1MTcxNjAwIiwiZW5kcG9pbnR1cmwiOiJJaUFsWVRBK1FJNnhueG1oZVU1TXFybi9IKzhoMTJZNDM0RlR3cjBENUtzPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI4IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWm1VeE1EWTRNMlF0WldOaE15MDBNalJrTFRnNFlqWXROR0V4TXpreE16WTVaV1V4IiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsInNoYXJpbmdpZCI6IktkY1krR1RTdzBLUUY2SENVRkE4K2ciLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.RFhqV3pzcDkrZ2U1NjdoeUZDaHlDNnpFTU5VVVhkUlIyOFhaeEgzc01Ydz0&encodeFailures=1&srcWidth=&srcHeight=&width=2334&height=1662&action=Access',
        'https://ukwest1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fonformarchitecture-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!PWgQ_qPsTUKItkoTkTae4XKXyITp-PRFrOJMDcfOA9u1dqsO2y3vRoeLTRssHbGp%2Fitems%2F01TNSPL2AVERDPDLLGF5DYNKG7CPQWRVA2%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvb25mb3JtYXJjaGl0ZWN0dXJlLW15LnNoYXJlcG9pbnQuY29tQDJhYjM0NDY0LWExYmQtNDBjYy1iMmY2LWU0NTg5YzU2M2I1MyIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2MDUxNTAwMDAiLCJleHAiOiIxNjA1MTcxNjAwIiwiZW5kcG9pbnR1cmwiOiJJaUFsWVRBK1FJNnhueG1oZVU1TXFybi9IKzhoMTJZNDM0RlR3cjBENUtzPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI4IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWm1VeE1EWTRNMlF0WldOaE15MDBNalJrTFRnNFlqWXROR0V4TXpreE16WTVaV1V4IiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jMDBhNTljNjk4NzBiYmMxY2ZjMWRiYTYwYmFhNzFiYTJjNTIzY2ZjMmRmNjc1YTk4Nzg4NWVmOWUzMGMyYWMwZiIsInNoYXJpbmdpZCI6IktkY1krR1RTdzBLUUY2SENVRkE4K2ciLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.RFhqV3pzcDkrZ2U1NjdoeUZDaHlDNnpFTU5VVVhkUlIyOFhaeEgzc01Ydz0&encodeFailures=1&srcWidth=&srcHeight=&width=2402&height=1395&action=Access',
        
        // {
        //   imgName: "FulhamRd.jpg"
        // }
      ],
      visibleSlide: 0,
    };
  }
};
</script>

<style >
img {
  height: 300px;
}
</style>