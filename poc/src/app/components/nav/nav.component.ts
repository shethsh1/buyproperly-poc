import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { logout, loginVerified } from '../../core/user/user.actions'
import { User } from 'src/app/core/user/user.state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loggedIn! : boolean

  constructor(private store: Store<{ user: User }>) {
  }

  ngOnInit(): void {
    if(!!localStorage.getItem('token')) {
      this.store.dispatch(loginVerified())
      this.store.select('user').subscribe(data => {
        this.loggedIn = data.verified
      })
    }

  }

  logout() {
    this.store.dispatch(logout())
  }

}
