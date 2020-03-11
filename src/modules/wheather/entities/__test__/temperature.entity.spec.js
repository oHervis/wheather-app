import { Temperature } from '../temperature.entity';

describe('Should handle temperature values', () => {
  describe('[temperatureFormatted] Should round the values', () => {
    test('Should round to 20', () => {
      const temperature = new Temperature(19.6);
      expect(temperature.temperatureFormatted).toEqual(20);
    });
    test('Should round to 10', () => {
      const temperature = new Temperature(10.4);
      expect(temperature.temperatureFormatted).toEqual(10);
    });
    test('Should round to 11', () => {
      const temperature = new Temperature(10.5);
      expect(temperature.temperatureFormatted).toEqual(11);
    });
  });
  describe('[isCold] Should return if is Cold', () => {
    test('Should return that it is cold if the temperature is less than 5', () => {
      const temperature = new Temperature(4);
      expect(temperature.isCold).toEqual(true);
    });
    test('Should return that not it is cold if the temperature is more than 5', () => {
      const temperature = new Temperature(6);
      expect(temperature.isCold).toEqual(false);
    });
    test('Should return that it is cold if the temperature is 5', () => {
      const temperature = new Temperature(5);
      expect(temperature.isCold).toEqual(true);
    });
  });
  describe('[isNormal] Should return if is nice', () => {
    test('Should return that it is normal if the temperature is less than 25', () => {
      const temperature = new Temperature(22);
      expect(temperature.isNormal).toEqual(true);
    });
    test('Should return that it is normal if the temperature is more than 5', () => {
      const temperature = new Temperature(6);
      expect(temperature.isNormal).toEqual(true);
    });
    test('Should return that not it is normal if the temperature is less than 5', () => {
      const temperature = new Temperature(4);
      expect(temperature.isNormal).toEqual(false);
    });
    test('Should return that not it is normal if the temperature is 5', () => {
      const temperature = new Temperature(5);
      expect(temperature.isNormal).toEqual(false);
    });
    test('Should return that not it is normal if the temperature more than 25', () => {
      const temperature = new Temperature(26);
      expect(temperature.isNormal).toEqual(false);
    });
    test('Should return that it is normal if the temperature is 25', () => {
      const temperature = new Temperature(25);
      expect(temperature.isNormal).toEqual(true);
    });
  });
  describe('[isHeat] Should return if is Heat', () => {
    test('Should return that it is Heat if the temperature is more than 25', () => {
      const temperature = new Temperature(26);
      expect(temperature.isHeat).toEqual(true);
    });
    test('Should return that not it is Heat if the temperature is less than 25', () => {
      const temperature = new Temperature(22);
      expect(temperature.isHeat).toEqual(false);
    });
    test('Should return that not it is Heat if the temperature is 25', () => {
      const temperature = new Temperature(25);
      expect(temperature.isHeat).toEqual(false);
    });
  });
});
