import { Injectable } from '@angular/core';

@Injectable()
export class RegExpService {
  public static email = /^([a-z0-9_-]+\.)*[a-z0-9_+0-9-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  constructor() { }

}
