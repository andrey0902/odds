import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthCoreService } from '../../core/services/auth-core.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'odds-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  public successful = null;
  private key = null;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthCoreService,
              public snackBar: MatSnackBar) {
    this.route.paramMap.subscribe(param => {
      this.key = param.get('key');
    });
  }
  ngOnInit() {
    this.authService.sendVerifyEmail({confirmation_token: this.key})
      .subscribe(response => {
        console.log(response);
        this.snackBar.open('Confirm email', 'success', {
          duration: 2000,
        });
        setTimeout(() => {
          this.router.navigate(['/auth/sign-in']);
        }, 2500);
        this.successful = response;
      }, error => {
        console.log(error);
        // do something and show user error
        this.snackBar.open(error.error.full_messages
          , 'Error', {
          duration: 2000,
        });
        setTimeout(() => {
          this.router.navigate(['/auth/sign-up']);
        }, 2500);
      });
  }

}
