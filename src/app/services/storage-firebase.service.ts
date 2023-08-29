import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root',
})
export class StorageFirebaseService {
  public storageRef = firebase.app().storage().ref();

  constructor() {}

  async uploadImage(name: string, image: any) {
    try {
      let response = await this.storageRef
        .child('product/' + name)
        .putString(image, 'data_url');
        return await response.ref.getDownloadURL();
      } catch (error) {
      return null;
    }
  }
}