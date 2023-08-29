import { Component, OnInit } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/model/products';
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
  public imageUrl: any;
  public category_arr: Category[] = [];

  formulario: FormGroup;

  constructor(
    private _storageServices: StorageFirebaseService,
    private _productServices: ProductoService,
    private _storage: Storage
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      image: new FormControl(),
      category: new FormControl(),
    });
  }

  ngOnInit() {
    this.category_arr = [
      { name: ' Hamgurguesa' },
      { name: 'Papas' },
      { name: 'Bebidas' },
    ];
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];

    const imgRef = ref(this._storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this._storage, 'images');

    listAll(imagesRef)
      .then(async (response) => {
        this.image = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.image.push(url);
          console.log(this.image);
        }
      })
      .catch((error) => console.log(error));
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this._productServices.addProduct(
      this.formulario.value
    );
    console.log(response);
  }
}
