import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import {ShareService} from "./share.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  

  constructor(private ShareService:ShareService, private router:Router){}

  canActivate(): boolean {
   

    if(this.ShareService.check){
      return true;
    }
    else
    {
      this.router.navigate(['/guard']);
      return false;
      
    }

  }
  

}
