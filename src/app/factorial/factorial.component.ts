import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {

  inputnumber:number=0
  factorial:number=0

  performFactorial(){
    this.factorial=1
    for (let i =1; i<=this.inputnumber; i++){
      this.factorial =this.factorial* i
    }   
  }
}
