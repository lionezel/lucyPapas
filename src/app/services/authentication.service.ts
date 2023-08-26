import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { UserLogin, UserRegister } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _auth: Auth) {}

  register({ email, password }: UserRegister) {
    return createUserWithEmailAndPassword(this._auth, email, password);
  }

  login({ email, password }: UserLogin) {
    return signInWithEmailAndPassword(this._auth, email, password);
  }
}
