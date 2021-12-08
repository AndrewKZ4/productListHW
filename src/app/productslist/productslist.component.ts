import { Component, OnInit } from '@angular/core';
import {Product} from "../models";

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  products: Product[]=
    [
      {
        name:"Product1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate ex a ultricies volutpat.",
        price: 125,
        id: 1
      },
      {
        name:"Product2",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate ex a ultricies volutpat.",
        price: 444,
        id: 2
      },
      {
        name:"Product3",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate ex a ultricies volutpat.",
        price: 545,
        id: 3
      },
      {
        name:"Product4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate ex a ultricies volutpat.",
        price: 123,
        id: 4
      },
      {
        name:"Product5",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate ex a ultricies volutpat.",
        price: 3523,
        id: 1
      },


    ]
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(product:Product)
  {
    this.products.unshift(product)
  }

  delProduct(id: number) {
    this.products = this.products.filter(p=>p.id !==id)
  }
}
