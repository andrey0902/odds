export class UserModel {
  id: number;
  name: string;
  email: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
  }
}
