import type { Character } from "./character";

export type RickData = {
  characters: {
    __typename: string;
    info: {
      __typename: string;
      count: number;
      pages: number;
    };
    results: Character[];
  };
};