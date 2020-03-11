import moment from '@/services/moment/moment.service';
import { WeatherResponseApi } from '../interfaces/wheather-response-api.interface';
import { Temperature } from './temperature.entity';

export class Wheather {
  public id: number;

  public name: string;

  public country: string;

  public temp: Temperature;

  public feelsLike: number;

  public tempMin: number;

  public tempMax: number;

  public pressure: number;

  public humidity: number;

  public lastUpdated: string;

  constructor(data: WeatherResponseApi) {
    this.id = data.id;
    this.name = data.name;
    this.country = data.sys.country;
    this.temp = new Temperature(data.main.temp);
    this.feelsLike = data.main.feels_like;
    this.tempMin = data.main.temp_min;
    this.tempMax = data.main.temp_max;
    this.pressure = data.main.pressure;
    this.humidity = data.main.humidity;
    this.lastUpdated = data.lastUpdated || moment().format();
  }

  public get lastUpdateFormatted(): string {
    return moment(this.lastUpdated).format('HH:mm:ss A');
  }
}
