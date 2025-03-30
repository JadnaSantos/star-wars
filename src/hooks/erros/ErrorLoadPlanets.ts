export class ErrorLoadPlanets extends Error {
  constructor(error: Error) {
    super(`Erro ao carregar os planetas: ${error.message}`);
    this.name = "ErrorLoadPlanets";
  }
}
