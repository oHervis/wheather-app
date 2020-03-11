import { TemperatureInterface } from '../interfaces/temperature.interface';

export class Temperature implements TemperatureInterface {
  public value: number;

  constructor(value: number) {
    this.value = value;
  }

  public get temperatureFormatted() {
    return Math.round(this.value);
  }

  public get isCold() {
    return this.value <= 5;
  }

  public get isNormal() {
    return this.value > 5 && this.value <= 25;
  }

  public get isHeat() {
    return this.value > 25;
  }
}
