import { Component } from '@angular/core';

import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';

firebase.initializeApp(environment.firebase);

@Component({
  selector: 'app-add-peoduct',
  templateUrl: './add-peoduct.component.html',
  styleUrls: ['./add-peoduct.component.css'],
})
export class AddPeoductComponent {
  public addProduct: any = [];

  constructor(private _storage: Storage) {}

  addProducts(addProductsForm: any) {
    if (addProductsForm.valid) {
    } else {
      alert('error');
    }
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this._storage, `images/${file.name}`);

    console.log(imgRef)

    uploadBytes(imgRef, file)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
