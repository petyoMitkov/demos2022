import { Pipe, PipeTransform } from '@angular/core';
import { CountyCodeEnum } from '../types';

const enum CountryFullNameEnum {
  BG = 'Bulgaria',
  DE = 'Germany',
  SP = 'Spain',
}

@Pipe({ name: 'country' })
export class CountyPipe implements PipeTransform {
  transform(value: CountyCodeEnum): string {
    switch (value) {
      case CountyCodeEnum.BG:
        return CountryFullNameEnum.BG;
      case CountyCodeEnum.DE:
        return CountryFullNameEnum.DE;
      case CountyCodeEnum.SP:
        return CountryFullNameEnum.SP;
      default:
        return value;
    }
  }
}
