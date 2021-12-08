import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../models";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>()
  productName!: string
  price!: number
  description!: string

  constructor() {
  }

  ngOnInit(): void {
  }

  addProduct() {
    const product: Product = {
      name: this.productName,
      price: this.price,
      description: this.description

    }

    this.onAdd.emit(product)

    this.productName = ""
    this.price = 0,
      this.description = ""

  }
}
