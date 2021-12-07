import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  ProductId: string;

  constructor(private actRoute: ActivatedRoute) {
    this.ProductId = this.actRoute.snapshot.params.productID;
  }

  ngOnInit(): void {
  }

}
