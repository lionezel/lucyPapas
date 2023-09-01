import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  public hamburger_arr: Products[] = [];
  public potato_arr: Products[] = [];
  public drink_arr: Products[] = [];

  constructor(private _productServices: ProductoService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productServices.getPlaces().subscribe((response) => {
      this.hamburger_arr =
        response.filter((product)=> product.category?.name.trim() === 'Hamgurguesa')
        this.potato_arr =
        response.filter((product)=> product.category?.name === 'Papas')
        this.drink_arr =
        response.filter((product)=> product.category?.name === 'Bebidas')

        console.log(this.hamburger_arr)
    });
  }
}
