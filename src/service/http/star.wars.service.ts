import { api } from "../api";

export const StartWarsService = {
  getCharacters: async function (params: { page?: number }) {
    const pageParam = params.page;
    const endpoint = `/people/?page=${pageParam}`;
    try {
      const response = await api.get(endpoint);
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error to getCharacters : ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },

  searchCharacters: async function (search: string) {
    try {
      const data = await api.get(`/people/?search=${search}`);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error to searchCharacters: ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },

  getPlanets: async function (params: { page?: number }) {
    const pageParam = params.page;
    const endpoint = `/planets/?page=${pageParam}`;
    try {
      const response = await api.get(endpoint);
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error to getPlanets: ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },

  searchPlanets: async function (search: string) {
    try {
      const data = await api.get(`/planets/?search=${search}`);
      return data;
    } catch (error: unknown) {
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
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error to getDetails: ${error.message}`);
      } else {
        throw new Error(`Unknown error: ${error}`);
      }
    }
  },
};
