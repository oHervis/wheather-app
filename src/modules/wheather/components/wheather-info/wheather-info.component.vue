<template>
  <section class="wheather-info">
    <wheather-info-card
      v-for="(wheather, index) in wheatherList"
      :key="index"
      :loading="loading"
      :show-meta-data="index === 1"
      :wheather-info="wheather"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import WheatherInfoCard from './components/wheather-info-card.component.vue';
import { Wheather } from '../../entities/wheather.entity';

@Component({ components: { WheatherInfoCard } })
export default class WheatherInfo extends Vue {
  @Prop({
    type: Array,
    default: () => [],
    validator: (value) => value.every((it: any) => it instanceof Wheather),
  })
  private readonly wheatherList!: Wheather[];

  @Prop({
    type: Boolean,
    default: () => false,
  })
  private readonly loading!: boolean;
}
</script>

<style lang="sass" scoped>
.wheather-info
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  +media-min-md()
    flex-direction: row
    flex-wrap: wrap
    width: 100%
  +media-min-lg()
    flex-wrap: nowrap
</style>
