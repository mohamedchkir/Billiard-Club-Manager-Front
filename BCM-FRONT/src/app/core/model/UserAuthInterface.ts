export interface UserAuthInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  numberOfTokens: number;
  password: string;
  role: string;
  city:string,
  imageUrl: string,
  permissions: string[],
}
