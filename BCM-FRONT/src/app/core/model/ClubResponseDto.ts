import {CityResponseDto} from "./CityResponseDto";
import {ServiceResponseDto} from "./ServiceResponseDto";

export interface ClubResponseDto {
  id: number;
  name: string;
  address: string;
  description: string;
  openingHour: Date;
  closeHour: Date;
  numberOfToken: number;
  city: CityResponseDto;
  services: ServiceResponseDto[];
}
