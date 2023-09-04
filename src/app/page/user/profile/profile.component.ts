import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/users';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  cliente: Cliente = {
    uid: '',
    email: '',
    name: '',
    phone: '',
    photo: '',
    address: '',
    password: ''
  };

  newFile: any;

  constructor(private _AuthenticationService: AuthenticationService){}

  async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (image) => {
        this.cliente.photo = image.target?.result as string;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}