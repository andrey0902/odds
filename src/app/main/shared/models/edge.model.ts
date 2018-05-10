export class EdgeModel {
  name: string;
  from: string;
  to: string;

  constructor(data) {
    this.from = data.from;
    this.to = data.to;
  }
}
