// src/app/product-details/product-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number | null = null; // Initialize as null
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.productId = idParam ? +idParam : null;  // Assign null if idParam is null

    if (this.productId !== null) {
      this.productService.getProduct(this.productId).subscribe(product => {
        this.product = product;
      });
    } else {
      // Handle the case where productId is null
      console.error('Invalid productId:', this.productId);
    }
  }
}
