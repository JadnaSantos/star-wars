export class ErrorLoadCharacters extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ErrorLoadCharacters";
  }
}
