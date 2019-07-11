<template>
  <div id="app">
    <ion-app>
      <ion-vue-router :animated="false"></ion-vue-router>
    </ion-app>
  </div>
</template>

<!--style src='./theme.css'></style-->

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "./components/Menu.vue";
import Home from "@/views/Home";
@Component({
  components: {
    Menu, Home
  }
})
export default class App extends Vue {
    mounted() {
    //this.$store.dispatch("loadSessionData");
    //this.$store.dispatch("loadSpeakerData");
  }
}
</script>