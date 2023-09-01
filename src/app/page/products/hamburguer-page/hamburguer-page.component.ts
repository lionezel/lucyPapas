import { Component, OnInit } from '@angular/core';

import { Products } from 'src/app/model/products';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-hamburguer-page',
  templateUrl: './hamburguer-page.component.html',
  styleUrls: ['./hamburguer-page.component.css'],
})
export class HamburguerPageComponent implements OnInit {
  public hamburgurger_arr: Products[] = [];

  constructor(private _productServices: ProductoService) {}

  ngOnInit(): void {
    this.getHamburger();
  }

  getHamburger() {
    this._productServices.getPlaces().subscribe((response) => {
      this.hamburgurger_arr = response.filter(
        (product) => product.category?.name.trim() === 'Hamgurguesa'
      );
    });
  }
}
