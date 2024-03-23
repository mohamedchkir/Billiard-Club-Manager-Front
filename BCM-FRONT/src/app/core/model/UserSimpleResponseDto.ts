import {CityResponseDto} from "./CityResponseDto";

export interface UserSimpleResponseDto {
  id: number;
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  numberOfToken: number;
  city: CityResponseDto;
  role: string;
  imageUrl: string;
}
