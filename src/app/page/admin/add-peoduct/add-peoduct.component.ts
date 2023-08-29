import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';

import { StorageFirebaseService } from 'src/app/services/storage-firebase.service';

@Component({
  selector: 'app-add-peoduct',
  templateUrl: './add-peoduct.component.html',
  styleUrls: ['./add-peoduct.component.css'],
})
export class AddPeoductComponent {
  public addProduct: any | null = [];
  public image: any[] = [];
  public imageUrl: any

  formulario: FormGroup;

  constructor(
    private _storageServices: StorageFirebaseService,
    private _productServices: ProductoService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      image: new FormControl(),
    });
  }

  uploadImage($event: any) {
    const file = $event.target.files;
    let reader = new FileReader();
    let name: String = '';

    reader.readAsDataURL(file[0]);
    this.image.push(reader.result);
    this._storageServices
      .uploadImage(name + '_' + Date.now(), reader.result)
      .then((urlImage) => {
        let product = {
          imgProduct: urlImage
        }
        console.log(product)
      });
  }


  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this._productServices.addProduct(
      this.formulario.value
    );
    console.log(response);
  }
}
