<template>
    <ion-content>
        <ion-header translucent>
        <ion-toolbar>
            <ion-title>Chat</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-list>
                <ion-list-header>
                    Conversaciones Recientes
                </ion-list-header>

                <ion-item v-for="match in matches" :key="match.id">
                    <ion-avatar slot="start">
                        <img :src="match.avatar">
                    </ion-avatar>
                    <ion-label>
                        <h2>{{match.name}} {{match.last_name}}</h2>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-content>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex'
@Component({
  components: {

  },
  computed: {
      ...mapGetters({'matches': 'persons/matches'}),
  },
})
export default class Matches extends Vue {
    public matches!: any[];

    public mounted() {
        this.$store.dispatch('persons/matches');
    }
}
</script>