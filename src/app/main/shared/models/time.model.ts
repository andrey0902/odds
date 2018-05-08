export class TimeModel {
  name: string;
  form: string;
  to: string;

  constructor(data) {
    this.form = data.from;
    this.to = data.to;
  }
}
