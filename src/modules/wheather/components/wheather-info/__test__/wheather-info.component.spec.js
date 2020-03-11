import { mount, createLocalVue } from '@vue/test-utils';
import WheatherInfo from '../wheather-info.component.vue';

const localVue = createLocalVue();

const mountFunction = (options) => mount(WheatherInfo, {
  localVue,
  ...options,
});
describe('WheatherInfo Test', () => {
  describe('[METHOD - retryRequest] - Should emit request ', () => {
    test('Should emit retry-request to try again the request', () => {
      const wrapper = mountFunction();
      wrapper.vm.retryRequest();
      expect(wrapper.emitted()).toHaveProperty('retry-request');
    });
  });
});
