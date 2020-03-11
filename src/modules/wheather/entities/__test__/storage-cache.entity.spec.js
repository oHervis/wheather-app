import moment from '../../../../services/moment/moment.service';
import LocalstorageService from '../../../../services/localstorage/localstorage.service';
import { StorageCache } from '../storage-cache.entity';
import { WheatherCache } from '../../enums/wheather-cache.enum';

describe('Should handle cache on application', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  describe('[saveInLocalStorage] - Should save cache in localstorage with current date', () => {
    test('Should call the function that save in localstorage', () => {
      const cache = new StorageCache();
      const spy = jest.spyOn(LocalstorageService, 'setItem');
      cache.saveInLocalStorage({ id: '1' });
      expect(spy).toHaveBeenCalled();
    });
    test('Should save in localstorage an object with attr data and lastUpdated', () => {
      const cache = new StorageCache();
      cache.saveInLocalStorage({ id: '1' });
      const data = localStorage.getItem(WheatherCache.KEY);
      expect(JSON.parse(data)).toHaveProperty('lastUpdated');
      expect(JSON.parse(data)).toHaveProperty('data');
    });
    test('Should set in instance a new data', () => {
      const cache = new StorageCache();
      cache.saveInLocalStorage({ data: { id: '1' }, lastUpdated: moment().format('DD/MM/YYYY') });
      expect(cache.data.data).toEqual({ id: '1' });
      expect(cache.data.lastUpdated).toEqual(moment().format('DD/MM/YYYY'));
    });
  });
  describe('[getInLocalStorage] - Should get items in localstorage', () => {
    test('Should call the function that get data in localstorage', () => {
      const cache = new StorageCache();
      const spy = jest.spyOn(LocalstorageService, 'getItemByName');
      cache.getInLocalStorage();
      expect(spy).toHaveBeenCalled();
    });
    test('Should get data in localStorage', async () => {
      const cache = new StorageCache();
      localStorage.setItem(WheatherCache.KEY, JSON.stringify({ id: '1' }));
      const data = await cache.getInLocalStorage();
      expect(data.id).toEqual('1');
    });
    test('Should return a string empty if localStorage is null', async () => {
      const cache = new StorageCache();
      const data = await cache.getInLocalStorage();
      expect(data).toEqual('');
    });
  });
  describe('[validate] - Should validate cache', () => {
    test('Should return false if not exist lastUpdated', () => {
      const cache = new StorageCache();
      const valid = cache.validate({ id: '1' });
      expect(valid).toBe(false);
    });
    test('Should return false lastUpdated if more than 10 minutes', () => {
      const cache = new StorageCache();
      const now = moment()
        .subtract(11, 'minutes')
        .format();
      const valid = cache.validate({ data: '1', lastUpdated: now });
      expect(valid).toBe(false);
    });
    test('Should return true lastUpdated if less than 10 minutes', () => {
      const cache = new StorageCache();
      const now = moment()
        .add(11, 'minutes')
        .format();
      const valid = cache.validate({ data: '1', lastUpdated: now });
      expect(valid).toBe(true);
    });
  });
});
