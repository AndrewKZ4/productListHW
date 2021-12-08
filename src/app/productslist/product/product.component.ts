import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') product!:Product
  @Output() onDel = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  delProduct() {
    this.onDel.emit(this.product.id)
  }
}
