export interface Hero {
  id: number;
  name: string;
  countryId: number;
  date: Date | null;
  peopleSaved: number;
  picture: string | null;
}
