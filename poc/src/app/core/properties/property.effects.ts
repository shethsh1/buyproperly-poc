
import { properties } from './property.state'
import * as PropertyActions from "./property.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { ApiService } from '../services/api.service';

@Injectable()
export class PropertyEffects {
  constructor(private actions$: Actions<any>, private apiService: ApiService) { }

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

}

