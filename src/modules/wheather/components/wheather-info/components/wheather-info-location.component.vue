<template>
  <div class="wheather-info-location">
    <span class="wheather-info-location__text">{{ cityName }}, {{ country }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class WheatherInfoLocation extends Vue {
  @Prop({
    type: String,
    default: () => '',
  })
  private readonly cityName!: string;

  @Prop({
    type: String,
    default: () => '',
  })
  private readonly country!: string;
}
</script>

<style lang="sass" scoped>
.wheather-info-location
  display: flex
  justify-content: center
  height: 40px
  align-items: center
  &__text
    color: $gray
    font-size: 18px
    margin-bottom: -10px
    font-family: Helvetica
</style>
