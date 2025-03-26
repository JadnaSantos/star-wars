import { api } from "../api";

export const StartWarsService = {
  getCharacters: async function () {
    try {
      const data = await api.get("/people");
      return data;
    } catch (error) {
      console.log("error", error);
    }
  },

  getPlanets: async function () {
    try {
      const data = await api.get("/planets");

      return data;
    } catch (error) {
      console.log("error", error);
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
