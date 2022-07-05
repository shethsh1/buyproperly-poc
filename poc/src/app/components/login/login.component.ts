import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { login } from '../../core/user/user.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''


  constructor(private store: Store) {
  }

  ngOnInit(): void {

  }

  onSubmit = () => {
    this.store.dispatch(login({ email: this.email, password: this.password }))
  }
}
