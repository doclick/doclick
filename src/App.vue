<template>
  <div id="app">
    <ion-app>
      <h1>content</h1>
      <ion-split-pane>
        <!--Menu/-->
        <ion-vue-router main :animated="false" id="menu-content" />
      </ion-split-pane>
    </ion-app>
  </div>
</template>

<!--style src='./theme.css'></style-->

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "./components/Menu.vue";
@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {
    created() {
      /*this.$store.getters.api.interceptors.response.use((response) => {
        return response;
      }, (error) => {
        if (error.response.status == 401) {
          //this.$store.dispatch('logout')
          //this.$router.go('/login');
        }

        return Promise.reject(error);
      });

      /*if (Object.keys(this.$store.getters.user).length == 0 && this.$store.getters.user.constructor === Object && this.$store.getters.isLoggedIn) {
        this.$store.dispatch('user');
      }*/
    }

    mounted() {
    //this.$store.dispatch("loadSessionData");
    //this.$store.dispatch("loadSpeakerData");
  }
}
</script>