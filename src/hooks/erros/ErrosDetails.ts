export class ErrorLoadPlanets extends Error {
  constructor(error: Error) {
    super(`Erro ao carregar personagens: ${error.message}`);
  }
}
