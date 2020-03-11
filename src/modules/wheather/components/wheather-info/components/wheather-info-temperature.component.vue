<template>
  <div class="wheather-info-temperature">
    <div v-if="loading">
      <img src="/img/icons/loader.svg" />
    </div>
    <span v-if="!loading" class="wheather-info-temperature__text" :class="classColor"
      >{{ temperature.temperatureFormatted }}
    </span>
    <span v-if="!loading" class="wheather-info-temperature__units" :class="classColor">º</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Temperature } from '../../../entities/temperature.entity';

@Component
export default class WheatherInfoTemperature extends Vue {
  @Prop({
    type: Object,
    default: () => new Temperature(0),
    validator: (value) => value instanceof Temperature,
  })
  private readonly temperature!: Temperature;

  @Prop({
    type: Boolean,
    default: () => false,
  })
  private readonly loading!: boolean;

  private get classColor() {
    return {
      'wheather-info-temperature__blue': this.temperature.isCold,
      'wheather-info-temperature__orange': this.temperature.isNormal,
      'wheather-info-temperature__red': this.temperature.isHeat,
    };
  }
}
</script>

<style lang="sass" scoped>
.wheather-info-temperature
  display: flex
  justify-content: center
  padding: 30px 0px
  &__units
    font-size: 40px
    margin-top: 0px
  &__text
    font-size: 90px
  &__blue
    color: $blue
  &__red
    color: $red
  &__orange
    color: $orange
</style>
