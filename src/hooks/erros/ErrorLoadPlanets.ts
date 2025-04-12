export class ErrorLoadPlanets extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ErrorLoadPlanets";
  }
}
