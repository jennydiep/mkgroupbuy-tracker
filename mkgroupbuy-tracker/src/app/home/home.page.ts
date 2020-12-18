import { Component } from '@angular/core';
import { ProductData } from "../data/product-data"
import { MktrackerService } from '../services/mktracker.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data:ProductData[];
  private service:MktrackerService;
  searchTerm:string;
  sortTerm:string;

  constructor(private mkService:MktrackerService) {
    this.service = mkService;
    this.data = this.service.toObject();
    
  }

  indexOfProduct(index:number) {
    // returns index of product that is clicked on 
    console.log(index);
  }

  setFilteredItems() {
    this.data = this.service.filterItems(this.searchTerm);
  }

  setFilteredItemsbyType(type:string) {
    this.data = this.service.filterItemsbyType(type);
  }

  resetItems() {
    this.service.initializeJSONData();
    this.data = this.service.toObject();
  }

  sortItems() {
    console.log('test');
    this.service.sortByPrice(this.sortTerm);
    this.data = this.service.toObject();

  }



}


