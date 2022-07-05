import { login, loginVerified, loginFailed } from './user.actions'
import { user } from './user.state'
import { createReducer, on } from '@ngrx/store';

export const loginVerifiedReducer = createReducer(
  user,
  on(loginVerified, (state, action) => {
    console.log("success")
    return { ...state, verified: true }
  })
)

export const loginFailedReducer = createReducer(
  user,
  on(loginFailed, (state, action) => {
    console.log("error")
    return { ...state, verified: false }
  })
)

