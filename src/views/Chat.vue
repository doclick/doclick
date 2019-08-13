<template>
    <ion-header translucent>
        <ion-toolbar>
            <ion-title>Chat</ion-title>
        </ion-toolbar>
    </ion-header>
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
    @Prop({default: null})
    user_id: number
}
</script>
