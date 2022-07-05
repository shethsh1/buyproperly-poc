import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { login } from '../../core/user/user.actions'
import { User } from 'src/app/core/user/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  error: string = '';








  constructor(private store: Store<{ user: User }>) {
  }

  ngOnInit(): void {

  }

  onSubmit = () => {
    this.store.dispatch(login({ email: this.email, password: this.password })) // synchronous call i think
    this.store.select('user').subscribe((data) => {
      this.error = data.error
    })
  }
}
