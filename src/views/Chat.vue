<template>
    <div>
        <ion-header>
          <ion-toolbar>
            <ion-title>Chat con</ion-title>
            <ion-buttons slot="end">
                <ion-button onclick="dismissModal()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-item>
              <ion-label position="floating">Mensaje</ion-label>
              <ion-input v-model="message" name="message" type="text"></ion-input>
              <ion-icon name="send" slot="end" @click="sendMessage"></ion-icon>
            </ion-item>
        </ion-content>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {

  },
  computed: {
  },
})
export default class Chat extends Vue {
    chat = {
        user_id: 1,
        user_id_to: this.user_id_to,
    }

    data() {
        return {
            message: undefined,

        }
    }

    @Prop({default: null})
    user_id_to: number

    public sendMessage() {
        console.log(this.message)
    }

    public mounted() {
        console.log(this.chat)
    }
}
</script>
