export class MembershipModel {
  public title: string;
  public description: string;
  public cost: number;
  public time: string;
  public functionality: string[];

  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.cost = data.cost;
    this.time = data.time;
    this.functionality = data.functionality;
  }
}
