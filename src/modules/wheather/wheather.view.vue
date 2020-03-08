<template>
  <div class="wheather">
    <header-app />
    <div class="wheather__container">
      <wheather-info :loading="loading" :wheather-list="wheatherList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import reponseMock from './mocks/response-cache.json';
import { Wheather } from './entities/wheather.entity';
import HeaderApp from './components/header/header.component.vue';
import WheatherInfo from './components/wheather-info/wheather-info.component.vue';

// import wheatherService from './services/wheather.service';

@Component({ components: { HeaderApp, WheatherInfo } })
export default class WheatherView extends Vue {
  private wheatherList: Wheather[] = [];

  private loading: boolean = false;

  private cityIds: any = [3421319, 3445709, 184745];

  private getCitiesIds(): string {
    return this.cityIds.join(',');
  }

  private toggleLoading(value: boolean = true): void {
    this.loading = value;
  }

  private async getWheatherByCityIds(): Promise<void> {
    this.toggleLoading(true);
    // const cityIds = this.getCitiesIds();
    // const { list }: any = await wheatherService.getWheatherByCityIds(cityIds);
    const { list }: any = reponseMock;
    this.wheatherList = list.map((it: any) => new Wheather(it));
    this.toggleLoading(false);
  }

  private created() {
    this.getWheatherByCityIds();
  }
}
</script>

<style lang="sass" scoped>
.wheather
  &__container
    max-width: 100vw
    background: $background
    padding-top: calc(50px + #{$header-height  })
  +media-min-md()
    &__container
      max-width: 75vw
      display: flex
      height: calc(100vh - #{$header-height  })
      margin: 0 auto
</style>
