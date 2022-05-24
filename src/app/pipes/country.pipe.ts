import { Pipe, PipeTransform } from '@angular/core';
import { CountyCodeEnum } from '../types';

const enum CountryFullNameEmun {
  BG = 'Bulgaria',
  DE = 'Germany',
  SP = 'Spain',
}

@Pipe({ name: 'country' })
export class CountyPipe implements PipeTransform {
  transform(value: CountyCodeEnum): string {
    switch (value) {
      case CountyCodeEnum.BG:
        return CountryFullNameEmun.BG;
      case CountyCodeEnum.DE:
        return CountryFullNameEmun.DE;
      case CountyCodeEnum.SP:
        return CountryFullNameEmun.SP;
      default:
        return value;
    }
  }
}
