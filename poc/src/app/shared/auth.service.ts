/* followed this tutorial: https://www.youtube.com/watch?v=pZn8mCAuBDU&ab_channel=Let%27sProgram */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
