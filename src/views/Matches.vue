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

                <!--ion-item v-for="match in matches" :key="match.id">
                    <ion-avatar slot="start">
                        <img :src="match.avatar">
                    </ion-avatar>
                    <ion-label>
                        <h2>{{match.name}} {{match.last_name}}</h2>
                    </ion-label>
                </ion-item-->

                <ion-list-header>
                    Matches
                </ion-list-header>

                <ion-item v-for="match in matches" :key="match.id">
                    <ion-avatar slot="start">
                        <img :src="match.avatar">
                    </ion-avatar>
                    <ion-label>
                        <h2 @click="loadChat(match.id)">{{match.name}} {{match.last_name}}</h2>
                    </ion-label>
                    <ion-badge col-2 color="danger" v-if="!match.pivot.view_at">Nuevo</ion-badge>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-content>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chat from './Chat'
import { mapGetters } from 'vuex'
@Component({
  components: {
      Chat
  },
  computed: {
      ...mapGetters({'matches': 'persons/matches'}),
  },
})
export default class Matches extends Vue {
    public matches!: any[];

    public loadChat(user_id_to) {
        console.log("load chat modal")
        return this.$ionic.modalController
        .create({
          component: Chat,
          componentProps: {
            data: {
              content: 'New Content',
            },
            propsData: {
              user_id_to: user_id_to
            },
          },
        })
        .then(m => m.present())
    }

    public mounted() {
        this.$store.dispatch('persons/matches');
    }
}
</script>