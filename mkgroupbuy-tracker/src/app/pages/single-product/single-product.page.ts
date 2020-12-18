import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MktrackerService } from '../../services/mktracker.service';
import { ProductData } from '../../data/product-data';
import { VendorData } from 'src/app/data/vendor-data';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  private id:string;
  private product:ProductData;
  private service:MktrackerService;

  // variables from product
  private name:string;
  private start:string;
  private end:string;
  private type:string;
  private price:number;
  private image:string;
  private vendors:VendorData[];


  constructor(private route:ActivatedRoute, mkService:MktrackerService) { 
    this.service = mkService;
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.service.getProduct(this.id);
    console.log();

    this.name = this.product.getName();
    this.start = this.product.getStart().toDateString();
    this.end = this.product.getEnd().toDateString();
    this.type = this.product.getType();
    this.price = this.product.getPrice();
    this.image = this.product.getImage();

    this.vendors = this.product.getVendors();

    
  }

}
