import moment from '@/services/moment/moment.service';
import localstorageService from '@/services/localstorage/localstorage.service';
import { Wheather } from './wheather.entity';
import { StorageCacheInterface } from '../interfaces/storage-cache.interface';
import { WheatherCache } from '../enums/wheather-cache.enum';

export class StorageCache implements StorageCacheInterface {
  public lastUpdated: string;

  public data: Wheather[];

  constructor(data: any = {}) {
    this.lastUpdated = data.lastUpdated;
    this.data = data.data;
  }

  public async saveInLocalStorage(data: any): Promise<void> {
    this.data = data;
    this.lastUpdated = moment().format();
    localstorageService.setItem(WheatherCache.KEY, this);
  }

  public async getInLocalStorage() {
    const cache = await localstorageService.getItemByName(WheatherCache.KEY);
    if (cache) {
      return JSON.parse(cache);
    }
    return '';
  }

  public validate(cache: any): boolean {
    if (!cache.lastUpdated) {
      return false;
    }
    return moment(cache.lastUpdated)
      .add(10, 'minutes')
      .isAfter(moment().format());
  }
}
