import { Injectable } from '@angular/core';

import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc
} from '@angular/fire/firestore';
import { Products } from '../model/products';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private _fireStore: Firestore) {}

  addProduct(product: Products) {
    const productRef = collection(this._fireStore, 'products');
    return addDoc(productRef, product);
  }

  addCar(product: Products) {
    const productRef = collection(this._fireStore, 'cars');
    return addDoc(productRef, product);
  }

  getPlaces(): Observable<Products[]> {
    const placeRef = collection(this._fireStore, 'products');
    return collectionData(placeRef, { idField: 'id' }) as Observable<
      Products[]
    >;
  }


  

}
