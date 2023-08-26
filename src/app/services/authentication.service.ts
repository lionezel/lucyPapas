import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { UserRegister } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _auth: Auth) {}

  register({ email, password }: UserRegister) {
    return createUserWithEmailAndPassword(this._auth, email, password);
  }
}
