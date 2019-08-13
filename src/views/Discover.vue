<template>
    <ion-content>
        <ion-header padding>
            <ion-title>Discover</ion-title>
        </ion-header>
        <ion-card>
            <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
        </ion-card>
    </ion-content>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex'
@Component({
  components: {

  },
  computed: {
    //...mapGetters({'persons': 'persons/persons'}),
  },
})
export default class Discover extends Vue {
  
  public mounted() {
      console.log(this.$route.params)
  }
}