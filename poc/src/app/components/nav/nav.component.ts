import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { logout, loginVerified } from '../../core/user/user.actions'
import { User } from 'src/app/core/user/user.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loggedIn! : boolean
  lang : string = 'en';
  innerWidth! : number;
  openSlider : boolean = false;


  constructor(private store: Store<{ user: User }>, private router : Router) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if(!!localStorage.getItem('token')) {
      this.store.dispatch(loginVerified())
    }
    this.store.select('user').subscribe(data => {
      this.loggedIn = data.verified
    })

    this.lang = localStorage.getItem('lang') || 'en'
  }

  logout() {
    this.store.dispatch(logout())
    this.router.navigate(['/login'])
  }

  changeLang(lang : any) {
    localStorage.setItem('lang', lang.value)
    window.location.reload()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    this.innerWidth = event.target.innerWidth;
  }

  openSliderFunc() {
    this.openSlider = true
  }

  closeSliderFunc() {
    this.openSlider = false
  }

}
