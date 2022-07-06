import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store'
import { User } from 'src/app/core/user/user.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService, private router : Router) {

  }

  canActivate() {
    if(this.auth.IsLoggedIn()) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }

  
  
}
