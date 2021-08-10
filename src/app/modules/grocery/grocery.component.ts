import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.sass']
})
export class GroceryComponent implements OnInit {
  products: [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getGroceries();
  }

  getGroceries(): void {
    // get vegitables
    this.dataService.getProducts('groceries')
      .subscribe(res => this.products = res);
  }

}
