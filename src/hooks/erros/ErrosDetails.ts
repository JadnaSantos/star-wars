export class ErrorLoadDetails extends Error {
  constructor(error: Error) {
    super(`Erro ao carregar detalhes: ${error.message}`);
    this.name = "ErrorLoadDetails";
  }
}
