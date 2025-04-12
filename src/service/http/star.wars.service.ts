import { StarWarsResponseApi } from "../../types/StarWarsResponse.types";
import { Characters } from "../../types/characters.types";
import { Planets } from "../../types/planets.types";
import { api } from "../api";

export const StarWarsService = {
  getCharacters: async function (page: number = 1): Promise<StarWarsResponseApi<Characters>>{
    try {
      const { data } = await api.get(`/people/?page=${page}`);
      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error to getCharacters : ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },

  searchCharacters: async function (name: string):Promise<StarWarsResponseApi<Characters>> {
    try {
      const { data } = await api.get(`/people/?search=${name}`);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error to searchCharacters: ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },

  getPlanets: async function (page: number = 1): Promise<StarWarsResponseApi<Planets>> {

    try {
      const { data } = await api.get(`/planets/?page=${page}`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error to getPlanets: ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },

  searchPlanets: async function (name: string):  Promise<StarWarsResponseApi<Planets>> {
    try {
      const { data } = await api.get(`/planets/?search=${name}`);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error to searchPlanets: ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },

  getDetails: async function (type: string, id: string) {
    try {
      const data = await api.get(`/${type}/${id}/`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error to getDetails: ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },
};
