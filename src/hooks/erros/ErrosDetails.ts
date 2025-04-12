export class ErrorLoadDetails extends Error {
  constructor(message:string) {
    super(message);
    this.name = "ErrorLoadDetails";
  }
}
