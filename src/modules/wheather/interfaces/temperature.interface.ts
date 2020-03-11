export interface TemperatureInterface {
  value: number;

  readonly temperatureFormatted: number;

  readonly isCold: boolean;

  readonly isNormal: boolean;

  readonly isHeat: boolean;
}
