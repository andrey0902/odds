import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthCoreService } from '../../core/services/auth-core.service';

@Component({
  selector: 'odds-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  public successful = null;
  private key = null;
  constructor(private route: ActivatedRoute,
              private authService: AuthCoreService) {
    this.route.paramMap.subscribe(param => {
      this.key = param.get('key');
      console.log('key', this.key);
    });
  }
  ngOnInit() {
    this.authService.sendVerifiEmail(this.key)
      .subscribe(response => {
        console.log(response);
        this.successful = response;
      }, error => {
        // do something and show user error
      });
  }

}
