import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  addition(data:any){

    let options={
      "method": "post",
      "body": JSON.stringify(data),
      "headers": {
        "content-type": "application/json"
      }
    }

    return fetch("http://127.0.0.1:8000/add",options)
  }

  subtraction(data:any){
    let options={
      "method": "post",
      "body": JSON.stringify(data),
      "headers": {
        "content-type": "application/json"
      }
    }

    return fetch("http://127.0.0.1:8000/sub",options)
  }

}
