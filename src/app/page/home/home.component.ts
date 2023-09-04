import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';

import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public promo: any;
  public products: Products[] = [];
  public load_btn = true;
  public itemBread: any | undefined

  constructor(private _productServices: ProductoService) {}

  ngOnInit(): void {
    this._productServices.getPlaces().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
    this.load_btn = true;

    this.breadCrumb();
  }

  breadCrumb(){
    this.itemBread = [{ label: 'Inicio' , icon: 'pi pi-home' }]
  }
}
