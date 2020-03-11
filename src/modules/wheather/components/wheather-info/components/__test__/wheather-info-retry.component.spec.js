import { mount, createLocalVue } from '@vue/test-utils';
import WheatherInfoRetry from '../wheather-info-retry.component.vue';

const localVue = createLocalVue();

const mountFunction = (options) => mount(WheatherInfoRetry, {
  localVue,
  ...options,
});
describe('WheatherInfoRetry Test', () => {
  describe('[METHOD - retryRequests] - Should emit request ', () => {
    test('Should emit retry-request to try again the request', () => {
      const wrapper = mountFunction();
      wrapper.vm.retryRequests();
      expect(wrapper.emitted()).toHaveProperty('retry-request');
    });
  });
});
