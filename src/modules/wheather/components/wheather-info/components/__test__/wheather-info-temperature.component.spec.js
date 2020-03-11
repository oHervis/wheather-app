import { mount, createLocalVue } from '@vue/test-utils';
import WheatherInfoTemperature from '../wheather-info-temperature.component.vue';
import { Temperature } from '../../../../entities/temperature.entity.ts';

const localVue = createLocalVue();

const mountFunction = (options) => mount(WheatherInfoTemperature, {
  localVue,
  ...options,
});
describe('WheatherInfoTemperature Test', () => {
  describe('DEFAULT - Should initialize prop with default value', () => {
    test('Should initialize prop with default temperature as 0', () => {
      const wrapper = mountFunction();
      expect(wrapper.vm.temperature.value).toEqual(0);
    });
  });
  describe('[COMPUTED - classColor] - Should return the class that change color of temperature on template ', () => {
    test('Should return the class that change color to blue', () => {
      const wrapper = mountFunction({
        propsData: {
          temperature: new Temperature(0),
        },
      });
      expect(wrapper.vm.classColor).toEqual({
        'wheather-info-temperature__blue': true,
        'wheather-info-temperature__orange': false,
        'wheather-info-temperature__red': false,
      });
    });
    test('Should return the class that change color to orange', () => {
      const wrapper = mountFunction({
        propsData: {
          temperature: new Temperature(6),
        },
      });
      expect(wrapper.vm.classColor).toEqual({
        'wheather-info-temperature__blue': false,
        'wheather-info-temperature__orange': true,
        'wheather-info-temperature__red': false,
      });
    });
    test('Should return the class that change color to red', () => {
      const wrapper = mountFunction({
        propsData: {
          temperature: new Temperature(33),
        },
      });
      expect(wrapper.vm.classColor).toEqual({
        'wheather-info-temperature__blue': false,
        'wheather-info-temperature__orange': false,
        'wheather-info-temperature__red': true,
      });
    });
  });
});
