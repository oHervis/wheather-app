<template>
  <div class="wheather-info-card">
    <wheather-info-location
      v-if="!loading"
      :city-name="wheatherInfo.name"
      :country="wheatherInfo.country"
    />
    <hr class="wheather-info-card__divider" v-if="!loading" />
    <div>
      <wheather-info-retry v-if="showRetryCard" @retry-request="retryRequest" />
    </div>
    <div v-if="!showRetryCard">
      <wheather-info-temperature :loading="loading" :temperature="wheatherInfo.temp" />
      <wheather-info-footer
        v-if="!loading"
        :show-meta-data="showMetaData"
        :humidity="wheatherInfo.humidity"
        :pressure="wheatherInfo.pressure"
        :lastUpdated="wheatherInfo.lastUpdateFormatted"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import WheatherInfoLocation from './wheather-info-location.component.vue';
import WheatherInfoTemperature from './wheather-info-temperature.component.vue';
import WheatherInfoFooter from './wheather-info-footer.component.vue';

import WheatherInfoRetry from './wheather-info-retry.component.vue';

@Component({
  components: {
    WheatherInfoLocation,
    WheatherInfoTemperature,
    WheatherInfoFooter,
    WheatherInfoRetry,
  },
})
export default class WheatherInfoCard extends Vue {
  @Prop({
    type: Object,
    default: () => ({}),
  })
  private readonly wheatherInfo!: any;

  @Prop({
    type: Boolean,
    default: () => false,
  })
  private readonly showMetaData!: boolean;

  @Prop({
    type: Boolean,
    default: () => false,
  })
  private readonly loading!: boolean;

  private get showRetryCard(): boolean {
    return !this.loading && !this.wheatherInfo.id;
  }

  private retryRequest() {
    this.$emit('retry-request');
  }
}
</script>

<style lang="sass">
.wheather-info-card
  background: #fff
  min-width: 255px
  width: 255px
  margin: 10px 30px
  box-shadow: 2px 4px 1px 1px $box-shadow
  &__divider
    width: 100%
    border: 1px solid $divider
</style>
