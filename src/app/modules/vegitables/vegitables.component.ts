import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-vegitables',
  templateUrl: './vegitables.component.html',
  styleUrls: ['./vegitables.component.sass']
})
export class VegitablesComponent implements OnInit {
  products: [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getVegitables();
  }

  getVegitables(): void {
    // get vegitables
    this.dataService.getProducts('vegitables')
      .subscribe(res => this.products = res);
  }

}
