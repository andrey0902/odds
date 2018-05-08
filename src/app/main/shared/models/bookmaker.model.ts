export class BookmakerModel {
  id: number;
  name: string;
  value?: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}
