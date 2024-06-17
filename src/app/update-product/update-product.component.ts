// src/app/update-product/update-product.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: number | null = null; // Initialize as null
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
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

  updateProduct(): void {
    if (this.productId !== null) {
      this.productService.updateProduct(this.productId, this.product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      // Handle the case where productId is null
      console.error('Invalid productId:', this.productId);
    }
  }
}
