import { mount, createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import localstorageService from '@/services/localstorage/localstorage.service.ts';
import WheatherView from '../wheather.view.vue';
import { Wheather } from '../entities/wheather.entity';
import { StorageCache } from '../entities/storage-cache.entity';
import { WheatherCache } from '../enums/wheather-cache.enum.ts';
import WheatherService from '../services/wheather.service.ts';

const localVue = createLocalVue();

const mountFunction = (options) => mount(WheatherView, {
  localVue,
  ...options,
});

jest.mock('../services/wheather.service.ts', () => ({
  getWheatherByCityIds: () => Promise.resolve({
    list: [{ id: 1, sys: {}, main: {} }],
  }),
}));

jest.useFakeTimers();
describe('WheatherView component ', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  describe('[METHOD - getCitiesIds]', () => {
    test('Should return array formatted as string [custom-array]', () => {
      const wrapper = mountFunction();
      wrapper.vm.cityIds = [1, 2, 3];
      const data = wrapper.vm.getCitiesIds();
      expect(data).toEqual('1,2,3');
    });
    test('Should return array formatted as string', () => {
      const wrapper = mountFunction();
      const data = wrapper.vm.getCitiesIds();
      expect(data).toEqual('3421319,3445709,184745');
    });
  });
  describe('[METHOD - toggleLoading]', () => {
    test('Should change loading value to truthy', () => {
      const wrapper = mountFunction();
      wrapper.vm.loading = false;
      wrapper.vm.toggleLoading(true);
      expect(wrapper.vm.loading).toBe(true);
    });
    test('Should change loading value to truthy when not param', () => {
      const wrapper = mountFunction();
      wrapper.vm.loading = false;
      wrapper.vm.toggleLoading();
      expect(wrapper.vm.loading).toBe(true);
    });
    test('Should change loading value to falsy', () => {
      const wrapper = mountFunction();
      wrapper.vm.loading = true;
      wrapper.vm.toggleLoading(false);
      expect(wrapper.vm.loading).toBe(false);
    });
  });
  describe('[METHOD - startRefresh]', () => {
    test('Should call the function that get wheather', () => {
      const wrapper = mountFunction();

      const spy = jest.spyOn(wrapper.vm, 'getWheatherByCityIds');
      wrapper.vm.startRefresh();
      jest.runOnlyPendingTimers();

      expect(spy).toHaveBeenCalled();
    });
  });
  describe('[METHOD - setWheatherList]', () => {
    test('Should set in the wheatherList an array of Wheathers', () => {
      const wrapper = mountFunction();
      const data = [{ id: 1, sys: {}, main: {} }];
      const responseExpected = [new Wheather({ id: 1, sys: {}, main: {} })];

      wrapper.vm.setWheatherList(data);

      expect(wrapper.vm.wheatherList).toEqual(responseExpected);
    });
    test('Should set in the wheatherList an array of Wheathers and set the cache date', () => {
      const wrapper = mountFunction();
      const data = [{ id: 1, sys: {}, main: {} }];
      wrapper.vm.cache = new StorageCache({ lastUpdated: '04-02-1997', data });
      wrapper.vm.setWheatherList(data);

      expect(wrapper.vm.wheatherList[0].lastUpdated).toEqual('04-02-1997');
    });
  });
  describe('[METHOD - setWheatherInLocalStorage]', () => {
    test('Should call the function that insert the response in localstorage ', () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(localstorageService, 'setItem');

      const data = [new Wheather({ id: 1, sys: {}, main: {} })];
      wrapper.vm.setWheatherInLocalStorage(data);
      expect(spy).toHaveBeenCalled();
    });
    test('Should insert the response in localstorage ', () => {
      const wrapper = mountFunction();
      const data = [new Wheather({ id: 1, sys: {}, main: {} })];
      wrapper.vm.setWheatherInLocalStorage(data);
      const localstorage = window.localStorage.getItem(WheatherCache.KEY);
      expect(JSON.parse(localstorage)).toHaveProperty('lastUpdated');
      expect(JSON.parse(localstorage)).toHaveProperty('data');
    });
  });
  describe('[METHOD - getWheatherByCityIds]', () => {
    test('Should call the function toggleLoading that show loading icon', () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm, 'toggleLoading');
      wrapper.vm.getWheatherByCityIds();

      expect(spy).toHaveBeenCalled();
      expect(wrapper.vm.loading).toBe(true);
    });
    test('Should call the function toggleLoading that hide loading icon', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm, 'toggleLoading');
      wrapper.vm.getWheatherByCityIds();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
      expect(wrapper.vm.loading).toBe(false);
    });
    test('Should call the function getCitiesIds that get ids of cities', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm, 'getCitiesIds');
      wrapper.vm.getWheatherByCityIds();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
    test('Should call the function getWheatherByCityIds of service', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(WheatherService, 'getWheatherByCityIds');
      wrapper.vm.getWheatherByCityIds();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
    test('Should call the function saveInLocalStorage that save in localstorage', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm.cache, 'saveInLocalStorage');
      wrapper.vm.getWheatherByCityIds();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
    test('Should call the function setWheatherList that set data in WheatherList', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm, 'setWheatherList');
      wrapper.vm.getWheatherByCityIds();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
  });
  describe('[METHOD - getWheather] ', () => {
    test('Should call the function getInLocalStorage that get cache in localStorage', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm.cache, 'getInLocalStorage');
      wrapper.vm.getWheather();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
    test('Should call the function validate that validate cache', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm.cache, 'validate');
      wrapper.vm.getWheather();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
    test('Should set new cache if to be validated', async () => {
      const wrapper = mountFunction();
      wrapper.vm.cache.getInLocalStorage = async () => ({ lastUpdated: '04-02-1997', data: [] });
      wrapper.vm.cache.validate = () => true;
      wrapper.vm.getWheather();
      await flushPromises();
      expect(wrapper.vm.cache.lastUpdated).toEqual('04-02-1997');
    });
    test('Should call the function setWheatherList that set data in WheatherList', async () => {
      const wrapper = mountFunction();
      const spy = jest.spyOn(wrapper.vm, 'setWheatherList');
      wrapper.vm.getWheather();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
    test('Should call the function getWheatherByCityIds if cache is not valid', async () => {
      const wrapper = mountFunction();
      wrapper.vm.cache.validate = () => false;
      const spy = jest.spyOn(wrapper.vm, 'getWheatherByCityIds');
      wrapper.vm.getWheather();
      await flushPromises();
      expect(spy).toHaveBeenCalled();
    });
  });
});
