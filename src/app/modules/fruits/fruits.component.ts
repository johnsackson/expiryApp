import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.sass']
})
export class FruitsComponent implements OnInit {
  products: [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    // get vegitables
    this.dataService.getProducts('fruits')
      .subscribe(res => this.products = res);
  }

}
