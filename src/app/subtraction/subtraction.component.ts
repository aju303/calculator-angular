import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {

  subForm=new FormGroup({
    "num1":new FormControl("",Validators.required),
    "num2":new FormControl("",Validators.required)
  })
  result:number=0
  // num1:number=0
  // num2:number=0

get num1(){
  return this.subForm.get("num1")
}

get num2(){
  return this.subForm.get("num2")
}

constructor(private service:CalcService) { }

  performSubstraction(){
    let data=this.subForm.value

    this.service.subtraction(data).then(res=>res.json()).then(data=>this.result=data.Result)
    
  }
    

}


