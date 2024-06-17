// src/app/create-product/create-product.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: any = {};

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
