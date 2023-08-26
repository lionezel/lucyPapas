import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public userLogin: any = [];

  constructor(
    private _authentication: AuthenticationService,
    private _router: Router
  ) {}

  login(loginForm: any) {
    if (loginForm.valid) {
      this._authentication.login(this.userLogin).then((response) => {
        this._router.navigate(['/']);
      });
    } else {
      alert('error');
    }
  }
}
