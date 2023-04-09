export interface IMovie {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [];
  starships: string[];
  url: string;
  vehicles: string[];
}
export interface IMovies {
  state: IMovie[];
}

export interface IMenuValue {
  id: number;
  title: string;
  path: string;
  dataTestid: string;
}
