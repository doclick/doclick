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

                <ion-item v-for="conversation in conversations" :key="conversation.id">
                    <ion-avatar slot="start">
                        <img :src="conversation.userTo.avatar">
                    </ion-avatar>
                    <ion-label>
                        <h2>{{conversation.userTo.name}} {{conversation.userTo.last_name}}</h2>
                        <h4>{{conversation.message}}</h4>
                    </ion-label>
                </ion-item>

                <ion-list-header>
                    Matches
                </ion-list-header>

                <ion-item v-for="match in matches" :key="match.id">
                    <ion-avatar slot="start">
                        <img :src="match.avatar">
                    </ion-avatar>
                    <ion-label>
                        <h2 @click="loadChat(match)">{{match.name}} {{match.last_name}}</h2>
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
      ...mapGetters({'matches': 'persons/matches', 'conversations': 'messages/conversations'}),
  },
})
export default class Matches extends Vue {
    matches!: any[];
    conversations!: any[];

    loadChat(user) {
        console.log("load chat modal")
        return this.$ionic.modalController
        .create({
          component: Chat,
          componentProps: {
            data: {
              content: 'New Content',
            },
            propsData: {
              user_id_to: user.id,
              name: user.name
            },
            parent: this,
          },
        })
        .then(m => m.present({

        }))
    }

    mounted() {
        this.$store.dispatch('messages/getConversations');

        this.$store.dispatch('persons/matches');
        this.$on('close', () => {
            this.$ionic.modalController.dismiss()
        })

        this.$on('sendMessage', (chat:Object) => {
            this.$store.dispatch('messages/sendMessage', chat)
        })
    }
}
</script>