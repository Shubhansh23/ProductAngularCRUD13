// src/app/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: any[];

  constructor(private productService: ProductService,private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }


  navigateToDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/products', id, 'update']);
  }

}
