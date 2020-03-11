import { Wheather } from '../entities/wheather.entity';

export interface StorageCacheInterface {
  lastUpdated: string;
  data: Wheather[];
  saveInLocalStorage(data: any): Promise<void>;
  getInLocalStorage(): Promise<any>;
  validate: Function;
}
