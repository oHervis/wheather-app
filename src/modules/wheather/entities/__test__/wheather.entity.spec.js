import { Wheather } from '../wheather.entity';
import moment from '../../../../services/moment/moment.service';
import mock from '../../mocks/response-cache.json';

describe('Should handle Wheather values', () => {
  describe('[lastUpdateFormatted] - Should return the date formatted', () => {
    test('Should return the date formatted to HH:mm:ss A', () => {
      const wheather = new Wheather(mock.list[0]);
      wheather.lastUpdated = moment('1997-02-04 01:10').format();
      expect(wheather.lastUpdateFormatted).toEqual('01:10:00 AM');
    });
    test('Should return the date formatted to HH:mm:ss A', () => {
      const wheather = new Wheather(mock.list[0]);
      wheather.lastUpdated = moment('1997-02-04 21:10').format();
      expect(wheather.lastUpdateFormatted).toEqual('21:10:00 PM');
    });
  });
});
