import http from '@/services/http.service';

class WheatherService {
  public getWheatherByIds(name: string) {
    console.log(name);
    return http.get('/weather?q=Nuuk,GL');
  }

  public getWheatherByCityIds(cityIds: string) {
    return http
      .get('/group', {
        params: {
          id: cityIds,
        },
      })
      .then(({ data }) => data);
  }
}

export default new WheatherService();
