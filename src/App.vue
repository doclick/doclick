<template>
  <div id="app">
    <ion-app>
      <ion-vue-router :animated="false"></ion-vue-router>
    </ion-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
  computed: {

  },
})
export default class App extends Vue {
  created() {
    this.$store.getters.api.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      if (error.response.status == 401) {
        this.$store.dispatch('user/logout')
        this.$router.go('/login');
      }
      return Promise.reject(error);
    });

    localStorage.getItem('user')?this.$store.commit('user/SET_USER', JSON.parse(localStorage.getItem('user'))):'';
    //!this.$store.state.user.user && this.$store.state.user.isAuthenticated?this.$store.dispatch('user/getAuthUser'):'';
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ion-header {
  background-color: #f27980;
  color: #fcfcdf;
}

ion-tab-bar, ion-tab-button {
  background-color: #f27980;
  color: #fcfcdf;
}
</style>
