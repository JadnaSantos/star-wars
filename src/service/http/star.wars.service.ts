import { api } from "../api";

export const StartWarsService = {
  getCharacters: async function (params: { page?: number }) {
    const endpoint = params.page ? `/people/?page=${params.page}` : "/people/";
    try {
      const response = await api.get(endpoint);
      return response;
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      throw error;
    }
  },

  searchCharacters: async function (search: string) {
    try {
      const data = await api.get(`/people/?search=${search}`);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  },

  getPlanets: async function (params: { page?: number }) {
    const endpoint = params.page
      ? `/planets/?page=${params.page}`
      : "/planets/";
    try {
      const response = await api.get(endpoint);
      return response;
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      throw error;
    }
  },

  getCharacterById: async function (id: string) {
    try {
      const data = await api.get(`/people/${id}`);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  },

  getPlanetById: async function (id: string) {
    try {
      const data = await api.get(`/planets/${id}`);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
