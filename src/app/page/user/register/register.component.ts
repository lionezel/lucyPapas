import { Component } from '@angular/core';
import { UserRegister } from 'src/app/model/users';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public userRegister: any = [];

  constructor(private _authentication: AuthenticationService) {}

  registro(registroForm: any) {
    if (registroForm.valid) {
      this._authentication.register(this.userRegister).then((response) => {
        console.log(response);
      });
    } else {
      alert('Hubo un error');
    }
  }
}
