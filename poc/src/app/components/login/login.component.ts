import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { login } from '../../core/user/user.actions'
import { User } from 'src/app/core/user/user.state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''




  constructor(private store: Store, private state: Store<{ LoginFail: User }>) {


  }

  ngOnInit(): void {


  }

  onSubmit = () => {
    this.store.dispatch(login({ email: this.email, password: this.password }))
  }
}
