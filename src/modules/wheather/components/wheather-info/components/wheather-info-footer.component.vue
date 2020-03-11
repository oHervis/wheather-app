<template>
  <div class="wheather-info-footer">
    <div class="wheather-info-footer__meta-data">
      <div v-if="showMetaData" data-test="showHumidity">
        <p class="wheather-info-footer__label">Humidity</p>
        <p class="wheather-info-footer__value">{{ humidity }}%</p>
      </div>
      <div v-if="showMetaData" data-test="showPressure">
        <p class="wheather-info-footer__label">Pressure</p>
        <p class="wheather-info-footer__value">{{ pressure }}<small>hPa</small></p>
      </div>
    </div>
    <div class="wheather-info-footer__date">
      <span> Updated at {{ lastUpdated }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class WheatherInfoFooter extends Vue {
  @Prop({
    type: Number,
    default: () => 0,
  })
  private readonly humidity!: number;

  @Prop({
    type: Number,
    default: () => 0,
  })
  private readonly pressure!: number;

  @Prop({
    type: String,
    default: () => '',
  })
  private readonly lastUpdated!: string;

  @Prop({
    type: Boolean,
    default: () => false,
  })
  private readonly showMetaData!: boolean;
}
</script>

<style lang="sass" scoped>
.wheather-info-footer
  display: flex
  flex-wrap: wrap
  background: $card-footer
  color: $gray-light
  padding: 0px 30px
  &__meta-data
    display: flex
    justify-content: space-between
    width: 100%
    text-align: center
  &__value
    color: $gray
    margin: 0
  &__label
    text-transform: uppercase
    font-size: 12px
  &__date
    font-size: 10px
    margin: 12px auto
</style>
