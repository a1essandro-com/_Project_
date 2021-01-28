import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  amount: number = 100;
  type: string = 'nothing';
  k: number = 7;
  cards_price: number;
  delivery_price: number = 300;
  price: number;
  constructor() {}


  ngOnInit(): void {
    this.cards_price = this.amount*this.k;
    this.price = this.cards_price + this.delivery_price;
  }
  amountpl(){
    if(this.amount<500){
      this.amount+=50
    }
    this.cards_price = this.amount*this.k;
    if(this.cards_price >= 2000){
      this.delivery_price = 0
    }
    if(this.cards_price < 2000){
      this.delivery_price = 300
    }
    this.price = this.cards_price + this.delivery_price;
  }

  amountmin(){
    if(this.amount>100){
      this.amount-=50
    }
    this.cards_price = this.amount*this.k;
    if(this.cards_price >= 2000){
      this.delivery_price = 0
    }
    if(this.cards_price < 2000){
      this.delivery_price = 300
    }
    this.price = this.cards_price + this.delivery_price;
  }

  setType(value){
    if(value === 'nothing'){
      this.k = 7;
    }
    if(value === 'gloss'){
      this.k = 10;
    }
    if(value === 'matte'){
      this.k = 12;
    }
    if(value === 'softtouch'){
      this.k = 15;
    }
    this.cards_price = this.amount*this.k;
    if(this.cards_price >= 2000){
      this.delivery_price = 0
    }
    if(this.cards_price < 2000){
      this.delivery_price = 300
    }
    this.price = this.cards_price + this.delivery_price;
  }
}
