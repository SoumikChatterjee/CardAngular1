import { Component } from '@angular/core';
import { Card } from './Card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Card[]
  constructor (){
    this.cards=[
      {
        title:"Free",
        price: "$0",
        desc: ["10 users included","2 GB of storage","Email support","Help center access"],
        buttonText:["btn-outline-primary","Sign up for free"]
      },
      {
        title:"Pro",
        price: "$15",
        desc: ["20 users included","10 GB of storage","Priority email support","Help center access"],
        buttonText:["btn-primary","Get started"]
      },
      {
        title:"Enterprice",
        price: "$29",
        desc: ["30 users included","15 GB of storage","Phone & email support","Help center access"],
        buttonText:["btn-primary","Contact Us"]
      }
    ]
  }
}
