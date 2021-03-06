import { login, loginVerified, loginFailed } from './user.actions'
import { user } from './user.state'
import * as UserActions from "./user.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions<any>, private apiService: ApiService, private router : Router) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) => {
        return this.apiService.verifyLogin(action.email, action.password).pipe(
          map((data) => {
            localStorage.setItem("token", data.jwttoken)
            this.router.navigate(['/properties'])
            return loginVerified()
          }),
          catchError((err) => {
            return of(loginFailed())
          })
        )
      })

    )

  )

}

