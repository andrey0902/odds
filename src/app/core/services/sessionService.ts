export class SessionService {
  /**
   * set user in local storage
   * */
  public static setUser(value: any): void {
    localStorage.setItem('odds.user', JSON.stringify(value) );
  }
  /**
   * get user from local storage
   * */
  public static getUser() {
   return JSON.parse(localStorage.getItem('odds.user'));
  }
}
