<template>
  <div class="wheather-info-card">
    <wheather-info-location :city-name="wheatherInfo.name" :country="wheatherInfo.country" />
    <hr class="wheather-info-card__divider" />
    <wheather-info-temperature :loading="loading" :temperature="wheatherInfo.temp" />
    <wheather-info-footer
      :show-meta-data="showMetaData"
      :humidity="wheatherInfo.humidity"
      :pressure="wheatherInfo.pressure"
      :lastUpdated="wheatherInfo.lastUpdateFormatted"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import WheatherInfoLocation from './wheather-info-location.component.vue';
import WheatherInfoTemperature from './wheather-info-temperature.component.vue';
import WheatherInfoFooter from './wheather-info-footer.component.vue';
import { Wheather } from '../../../entities/wheather.entity';

@Component({
  components: {
    WheatherInfoLocation,
    WheatherInfoTemperature,
    WheatherInfoFooter,
  },
})
export default class WheatherInfoCard extends Vue {
  @Prop({
    type: Object,
    default: () => [],
    validator: (value) => value instanceof Wheather,
  })
  private readonly wheatherInfo!: Wheather;

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
