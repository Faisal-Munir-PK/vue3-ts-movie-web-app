export interface IMovie {
  Title: string;
  Year: string;
  ImbdID?: string;
  Type: string;
  Poster: string;
  Rated?: string;
  Released?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language: string;
  Country?: string;
  Awards?: string;
  Ratings?: IRating[];
  MetaScore?: string;
  ImbdRating?: string;
  ImbdVotes?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Respionse?: boolean;
  Runtime?: string;
  Images?: string[]
}
export interface IRating {
  Source: string;
  Value: number;
}