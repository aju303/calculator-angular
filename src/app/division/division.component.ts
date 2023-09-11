import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {

  result:number=0
  num1:number=0
  num2:number=0

  perfromDivision(){
    this.result= this.num1 / this.num2 
  }

}
