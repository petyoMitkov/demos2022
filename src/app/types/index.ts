export interface Card {
  id: string;
  title: string;
  imageUrl?: string;
  country: CountyCodeEnum;
}

export enum CountyCodeEnum {
  BG = 'BG',
  DE = 'DE',
  SP = 'SP',
}
