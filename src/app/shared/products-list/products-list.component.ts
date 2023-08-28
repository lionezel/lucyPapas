import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  public products: Products[] = [];

  constructor(private _productServices: ProductoService) {}

  ngOnInit(): void {
    this._productServices.getPlaces().subscribe((response) => {
      console.log(response);
    });
  }
}
