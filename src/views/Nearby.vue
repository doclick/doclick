<template>
    <ion-content>
        <ion-header>
            <ion-title>Nearby</ion-title>
        </ion-header>
        <ion-content padding>
          <ion-grid text-center>
            <ion-row wrap>
              <ion-col width-25 v-for="person in persons" :key="person.id">
                  <ion-avatar style="margin: auto;">
                    <img :src="'images/'+person.avatar">
                  </ion-avatar>
                  <ion-tex>{{ person.name }}</ion-tex>
              </ion-col>
            </ion-row>
          </ion-grid>
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
    ...mapGetters({'persons': 'persons/persons'})
  }
})
export default class Nearby extends Vue {
    persons!: any[]

    mounted() {
        this.$store.dispatch('persons/getNearby')
    }
}
</script>

