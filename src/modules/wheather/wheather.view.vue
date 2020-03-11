<template>
  <div class="wheather">
    <header-app />
    <div class="wheather__container">
      <wheather-info
        :loading="loading"
        :wheather-list="wheatherList"
        @retry-request="getWheatherByCityIds"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from '@/services/moment/moment.service';
import localstorageService from '@/services/localstorage/localstorage.service';
import { Wheather } from './entities/wheather.entity';
import { WheatherCache } from './enums/wheather-cache.enum';
import HeaderApp from './components/header/header.component.vue';
import WheatherInfo from './components/wheather-info/wheather-info.component.vue';
import wheatherService from './services/wheather.service';
import { StorageCache } from './entities/storage-cache.entity';

@Component({ components: { HeaderApp, WheatherInfo } })
export default class WheatherView extends Vue {
  private wheatherList: Wheather[] = [];

  private loading: boolean = false;

  private cache: StorageCache = new StorageCache();

  private cityIds: any = [3421319, 3445709, 184745];

  private getCitiesIds(): string {
    return this.cityIds.join(',');
  }

  private toggleLoading(value: boolean = true): void {
    this.loading = value;
  }

  private startRefresh() {
    setInterval(() => {
      this.getWheatherByCityIds();
    }, 600000);
  }

  private setWheatherList(list: any[]) {
    this.wheatherList = list.map(
      (it: any) => new Wheather({ ...it, lastUpdated: this.cache.lastUpdated }),
    );
  }

  private setWheatherInLocalStorage(list: any[]) {
    const payload = {
      lastUpdated: moment().format(),
      data: list,
    };
    localstorageService.setItem(WheatherCache.KEY, payload);
  }

  private async getWheatherByCityIds(): Promise<void> {
    this.toggleLoading(true);
    const cityIds = this.getCitiesIds();
    const { list } = await wheatherService.getWheatherByCityIds(cityIds);
    this.cache.saveInLocalStorage(list);
    this.setWheatherList(list);
    this.toggleLoading(false);
  }

  private async getWheather(): Promise<void> {
    const cache = await this.cache.getInLocalStorage();
    const isValidCache = this.cache.validate(cache);
    if (isValidCache) {
      this.cache = new StorageCache(cache);
      this.setWheatherList(this.cache.data);
      return;
    }
    this.getWheatherByCityIds();
  }

  private created() {
    this.getWheather();
    this.startRefresh();
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
