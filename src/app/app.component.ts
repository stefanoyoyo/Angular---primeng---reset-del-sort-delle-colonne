import {Component, ViewChild} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    products1: Product[];

    products2: Product[];

    products3: Product[];

    @ViewChild('table') table: Table;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products1 = data);
        this.productService.getProductsSmall().then(data => this.products2 = data);
        this.productService.getProductsSmall().then(data => this.products3 = data);
    }

    onclick() {
        console.log('fire')
        this.resetSort();
    }

    resetSort() {
        this.table.sortOrder = 0;
        this.table.sortField = '';
        this.table.reset();
       }
}
