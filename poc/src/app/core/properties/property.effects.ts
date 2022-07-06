
import * as PropertyActions from "./property.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { ApiService } from '../services/api.service';
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class PropertyEffects {
  constructor(private actions$: Actions<any>, private apiService: ApiService, private router : Router) { }

  getProperties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.fetchProperties),
      switchMap((action) => {
        return this.apiService.fetchProperties(action.limit, action.offset).pipe(
          map((data) => {
            return PropertyActions.fetchPropertiesFulfilled({ properties: data })
          })
        )
      })

    )
  )

  getProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.fetchProperty),
      switchMap((action) => {
        return this.apiService.fetchProperty(action.slurp).pipe(
          map((data) => {
            return PropertyActions.fetchPropertyFulfilled({ property: data })
          }),
          catchError((err) => {
            this.router.navigate(['/properties'])
            return of(PropertyActions.fetchPropertyRejected())
          })
        )
      })

    )
  )

}

