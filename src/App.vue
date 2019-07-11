<template>
  <div id="app">
    <ion-app>
      <ion-vue-router :animated="false"></ion-vue-router>
    </ion-app>
  </div>
</template>

<!--style src='./theme.css'></style#d3b1c2#382a40-->
<style lang="scss" src="./assets/scss/theme.scss"></style>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home";
@Component({
  components: {
    Home
  }
})
export default class App extends Vue {
    mounted() {
    //this.$store.dispatch("loadSessionData");
    //this.$store.dispatch("loadSpeakerData");
  }
}
</script>