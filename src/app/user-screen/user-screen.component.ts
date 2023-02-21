import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Product } from './product';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.less']
})
export class UserScreenComponent implements OnInit {

  constructor(private http:HttpClient) { }
  // HTTP'den gelenleri ekrana yazdıracak değişken.

  allCards!: Product[];

  ngOnInit(): void {
    this.http.get<Product[]>("http://localhost:3000/products").subscribe(data => {
      this.allCards = data;
    });
  }


  //icons start
  faCartShopping = faCartShopping;
  faBars = faBars;
  faXmark = faXmark;
  faCreditCard = faCreditCard;
  //icons stop

  decreaseBtn(card:any){
     card.count--;
     if(card.count<0){
       card.count = 0;
     }
  }
  increaseBtn(card:any){
     card.count++;
  }

  showOrderCont:boolean=false;
  closeOrderContainer(){
    this.showOrderCont = false;
  }
  showOrderContainer(){
    this.showOrderCont = true;
  }

}
