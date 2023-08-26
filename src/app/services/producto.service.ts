import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private _fireStore: Firestore) {}

  addProduct(product: Products) {
    const productRef = collection(this._fireStore, 'product');
    return addDoc(productRef, product);
  }
}
