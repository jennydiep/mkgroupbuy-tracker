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
  sortTerms:string[];

  constructor(private mkService:MktrackerService) {
    this.service = mkService;
    this.data = this.service.toObject();
    this.sortTerms = ["price-high", "price-low", "start", "end"];
    
  }

  setFilteredItems() {
    this.data = this.service.filterItems(this.searchTerm);
    this.sortTerm = null;
  }

  setFilteredItemsbyType(type:string) {
    this.data = this.service.filterItemsbyType(type);
    this.sortTerm = null;
  }

  resetItems() {
    this.service.initializeJSONData();
    this.data = this.service.toObject();
    this.sortTerm = null;
  }

  sortItems() {
    this.service.sortByPrice(this.sortTerm);
    this.data = this.service.toObject();

  }



}


