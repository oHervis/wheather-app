import { mount, createLocalVue } from '@vue/test-utils';
import WheatherInfoCard from '../wheather-info-card.component.vue';
import { Wheather } from '../../../../entities/wheather.entity';
import mock from '../../../../mocks/response-cache.json';

const localVue = createLocalVue();

const mountFunction = (options) => mount(WheatherInfoCard, {
  localVue,
  ...options,
});
describe('WheatherInfoCard Test', () => {
  describe('[COMPUTED - showRetryCard] - Should return if show retry card ', () => {
    test('Should return true if not exist id and loading is false', () => {
      const wrapper = mountFunction();
      wrapper.setProps({
        wheatherInfo: new Wheather(mock.list[0]),
        loading: false,
      });
      wrapper.vm.wheatherInfo.id = '';
      expect(wrapper.vm.showRetryCard).toBe(true);
    });
    test('Should return false because id is not null', () => {
      const wrapper = mountFunction();
      wrapper.setProps({
        wheatherInfo: new Wheather(mock.list[0]),
        loading: false,
      });

      expect(wrapper.vm.showRetryCard).toBe(false);
    });
    test('Should return false because loading is true', () => {
      const wrapper = mountFunction();
      wrapper.setProps({
        wheatherInfo: new Wheather(mock.list[0]),
        loading: true,
      });
      wrapper.vm.wheatherInfo.id = '';
      expect(wrapper.vm.showRetryCard).toBe(false);
    });
  });
  describe('[METHOD - retryRequest] - Should emit request ', () => {
    test('Should emit retry-request to try again the request', () => {
      const wrapper = mountFunction();
      wrapper.vm.retryRequest();
      expect(wrapper.emitted()).toHaveProperty('retry-request');
    });
  });
});
