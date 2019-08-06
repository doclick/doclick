<template>
  <div>
    <ion-tabs>
      <ion-tab tab="/nearby">
        <ion-vue-router name="nearby"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/chat">
        <ion-vue-router name="chat"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/discover">
        <ion-vue-router name="discover"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/about">
        <ion-vue-router name="about"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="/nearby">
          <ion-icon ios="ios-globe" md="md-globe"/>
          <!--ion-label>Tab 2</ion-label-->
        </ion-tab-button>

        <ion-tab-button tab="/chat">
          <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"/>
          <!--ion-label>Chat</ion-label-->
        </ion-tab-button>

        <ion-tab-button tab="/discover">
          <ion-icon ios="ios-images" md="md-images"/>
          <!--ion-label>Chat</ion-label-->
        </ion-tab-button>

        <ion-tab-button tab="/about">
          <ion-icon ios="ios-contact" md="md-contact" />
          <!--ion-label>Tab 1</ion-label-->
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  },
})
export default class Home extends Vue {}
</script>
