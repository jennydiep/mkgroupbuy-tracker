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
    this.data = this.service.toObject(); // stores product data
    this.sortTerms = ["price-high", "price-low", "start", "end"]; // for sort by feature
    
  }

  setFilteredItems() {
    // for filtering items that match search term from search bar
    this.data = this.service.filterItems(this.searchTerm);
    this.sortTerm = null; // to reset sort by label
  }

  setFilteredItemsbyType(type:string) {
    // for filtering by item type: keyboard or keycaps
    this.data = this.service.filterItemsbyType(type);
    this.sortTerm = null; // to reset sort by label
  }

  resetItems() {
    // reset filter/sort/search
    this.service.initializeJSONData();
    this.data = this.service.toObject();
    this.sortTerm = null; // to reset sort by label
  }

  sortItems() {
    // sort items by sort by feature
    this.service.sortByPrice(this.sortTerm);
    this.data = this.service.toObject(); 

  }



}


