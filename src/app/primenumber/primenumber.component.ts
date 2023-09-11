import { Component } from '@angular/core';

@Component({
  selector: 'app-primenumber',
  templateUrl: './primenumber.component.html',
  styleUrls: ['./primenumber.component.css']
})
export class PrimenumberComponent {
  numberToCheck=0

  isPrime(n: number): boolean{
    if (n<= 1){
      return false;
    }

    for (let i  = 2; i<n; i++ ){
      if(n % i === 0){
        return false;
      }
    }
    return true;
  }
}
