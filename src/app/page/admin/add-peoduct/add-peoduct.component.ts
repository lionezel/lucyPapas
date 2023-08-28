import { Component } from '@angular/core';

import { StorageFirebaseService } from 'src/app/services/storage-firebase.service';

@Component({
  selector: 'app-add-peoduct',
  templateUrl: './add-peoduct.component.html',
  styleUrls: ['./add-peoduct.component.css'],
})
export class AddPeoductComponent {
  public addProduct: any = [];
  public image: any[] = [];

  constructor(private _storageServices: StorageFirebaseService) {}

  addProducts(addProductsForm: any) {
    if (addProductsForm.valid) {
    } else {
      alert('error');
    }
  }

  uploadImage($event: any) {
    const file = $event.target.files;
    let reader = new FileReader();
    let name: String = '';

    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.image.push(reader.result);
      this._storageServices
        .uploadImage(name + '_' + Date.now(), reader.result)
        .then((urlImage) => {
          console.log(urlImage)
        });
    };
  }
}
