import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  check:boolean=false;

  login(){
    this.check=!this.check;
  }
  
}
