import LocalstorageService from '../localstorage.service';

describe('Service that handle localstorage methods', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  describe('getItemByName - Should get item by name in localstorage and return as string', () => {
    test('Should return a string object of localstorage', async () => {
      window.localStorage.setItem('test', JSON.stringify({ id: '1' }));
      const data = await LocalstorageService.getItemByName('test');
      expect(data).toEqual(JSON.stringify({ id: '1' }));
    });
    test('Should return a string empty if not localStorage is null ', async () => {
      const data = await LocalstorageService.getItemByName('test');
      expect(data).toEqual('');
    });
  });
});
