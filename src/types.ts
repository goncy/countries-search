export interface Country {
  name: string;
  region: string;
  subregion: string;
  population: number;
  flag: string;
  capital: string;
  topLevelDomain: string[];
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  nativeName: string;
}
