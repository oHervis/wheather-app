import { mount, createLocalVue } from '@vue/test-utils';
import WheatherInfoFooter from '../wheather-info-footer.component';

const localVue = createLocalVue();

const mountFunction = (options) => mount(WheatherInfoFooter, {
  localVue,
  ...options,
});
describe('WheatherInfoCard Test', () => {
  describe('[TEMPLATE - showHumidity] - Should is visible if showMetaData ', () => {
    test('Should not visible if showMetaData', () => {
      const wrapper = mountFunction({
        showMetaData: false,
      });
      const element = wrapper.find('[data-test="showHumidity"]');
      expect(element.exists()).toBe(false);
    });
    test('Should is visible if showMetaData', () => {
      const wrapper = mountFunction({
        propsData: {
          showMetaData: true,
        },
      });
      const element = wrapper.find('[data-test="showHumidity"]');
      expect(element.exists()).toBe(true);
    });
  });
  describe('[TEMPLATE - showPressure] - Should is visible if showMetaData ', () => {
    test('Should not visible if showMetaData', () => {
      const wrapper = mountFunction({
        showMetaData: false,
      });
      const element = wrapper.find('[data-test="showPressure"]');
      expect(element.exists()).toBe(false);
    });
    test('Should is visible if showMetaData', () => {
      const wrapper = mountFunction({
        propsData: {
          showMetaData: true,
        },
      });
      const element = wrapper.find('[data-test="showPressure"]');
      expect(element.exists()).toBe(true);
    });
  });
});
