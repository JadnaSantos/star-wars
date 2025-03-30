export class ErrorLoadCharacters extends Error {
  constructor(error: Error) {
    super(`Erro ao carregar personagens: ${error.message}`);
    this.name = "ErrorLoadCharacters";
  }
}
