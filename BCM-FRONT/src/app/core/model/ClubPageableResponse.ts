import {ClubResponseDto} from "./ClubResponseDto";

export interface ClubPageableResponse {
  content: ClubResponseDto[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
