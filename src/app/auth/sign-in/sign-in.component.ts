import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'odds-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('params', params);
    });
  }

  public login() {
    this.authService.login();
    console.log(this.authService.getUser());
  }

}
