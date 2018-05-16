export class UserModel {
  id?: number;
  name: string;
  email: string;

  constructor(data) {
    this.id = data.id ? data.id : null;
    this.name = data.name;
    this.email = data.email;
  }
}
