import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-buy-screen',
  templateUrl: './buy-screen.component.html',
  styleUrls: ['./buy-screen.component.less']
})
export class BuyScreenComponent implements OnInit, AfterContentChecked{

  constructor() { }
  //Buy buttonundaki dolar
  dollarSign=faDollarSign;
  deleteIcon=faXmark;
  ngOnInit(): void {
  }
  ngAfterContentChecked(): void {
    this.buyForm.valid;
  }
  //Değişkenler 
  openToPopUp:boolean = true;
  openPopUp(){
    this.openToPopUp = true;
  } 
  closePopUp(){
    this.openToPopUp = false;
  }
  showBack:boolean= false;
  flipToBack(){
    this.showBack = true;
  }

  //formun card number dataları
  cardNumber:string = "1234345678910111";
  cardNumber1:string = "1234";
  cardNumber2:string = "3456";
  cardNumber3:string = "7891";
  cardNumber4:string = "0111";
  //burayı sayfa her init oldugunda ile de dene(fakat mantıklı olmayabilir çünkü event'i input ile yakalıyoruz.)
  everyKeyup(){
    this.cardNumber1 = this.cardNumber.slice(0,4);
    this.cardNumber2= this.cardNumber.slice(4,8);
    this.cardNumber3 = this.cardNumber.slice(8,12);
    this.cardNumber4 = this.cardNumber.slice(12,16);
  }
  //pay buttona basıldığında Card Numberi kontrol ediyor.
  log(){
    console.log("cardNumber1 : " + this.cardNumber1);
    console.log("cardNumber2 : " + this.cardNumber2);
    console.log("cardNumber3 : " + this.cardNumber3);
    console.log("cardNumber4 : " + this.cardNumber4);
    console.log("cardNumberALL : " + this.cardNumber);
  }
  
  //formun geri kalan dataları
  cardHolder:string = "Eray Tekin";
  cardCvv:number = 394;
  cardMonth:number = 12;
  cardYear:number = 24;
  cardMonthNumber:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12];
  cardYearNumber:Array<number> = [22,23,24,25,26,27,28,29,30];
  // Pay Form Validate
  buyForm = new FormGroup({
    cardNumber: new FormControl('',[Validators.required]),
    cardCvv: new FormControl('',[Validators.required]),
    cardHolders: new FormControl('',[Validators.required]),
    cardMonth: new FormControl('',[Validators.required]),
    cardYear: new FormControl('',[Validators.required]),
  });

  onDoSubmitBuy() {
    console.warn(this.buyForm.value);
  }

}
