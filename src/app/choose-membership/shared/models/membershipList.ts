import { MembershipModel } from './membership-model';

export class MembershipList {
  public monthly: MembershipModel;
  public quarterly: MembershipModel;

  constructor(data) {
    this.monthly = data.monthly.map(item => new MembershipModel(item));
    this.quarterly = data.quarterly.map(item => new MembershipModel(item));
  }
}
