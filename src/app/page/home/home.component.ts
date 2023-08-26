import { Component, OnInit } from '@angular/core';

import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public promo: any;

  constructor(private _productServices: ProductoService) {}

  ngOnInit(): void {
  }
}

