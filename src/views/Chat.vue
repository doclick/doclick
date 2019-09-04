<template>
    <div>
        <ion-header>
          <ion-toolbar>
            <ion-title>Chat con {{ name }}</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="dismissModal()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content padding>
          <ion-list>
            <ion-list-header>
              Messages
            </ion-list-header>

            <ion-item v-for="message in conversation" :key="message.id">
              <ion-label>
                <h2>{{message.message}}</h2>
              </ion-label>
            </ion-item>
          </ion-list>
            
            <ion-item>
              <ion-label position="floating">Mensaje</ion-label>
              <ion-input :value="chat.message" @input="chat.message = $event.target.value" name="message" type="text"></ion-input>
              <ion-icon name="send" slot="end" @click="sendMessage"></ion-icon>
            </ion-item>
        </ion-content>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  components: {

  },
  computed: {
    ...mapGetters({'conversation': 'messages/conversation'}),
  },
})
export default class Chat extends Vue {
    public chat = {
        user_id: this.user_id,
        user_id_to: this.user_id_to,
        message: ''
    }

    @Prop({default: null})
    user_id: number

    @Prop({default: null})
    user_id_to: number

    @Prop({default: ''})
    name: string

    public sendMessage() {
        this.$parent.$emit('sendMessage', this.chat)
    }

    dismissModal() {
      this.$parent.$emit('close')
    }

    mounted() {
      this.$store.dispatch('messages/getConversation', this.user_id_to);
    }
}
</script>
