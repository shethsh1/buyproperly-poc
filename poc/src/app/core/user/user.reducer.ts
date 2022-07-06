import { loginVerified, loginFailed, logout } from './user.actions'
import { user } from './user.state'
import { createReducer, on } from '@ngrx/store';

export const loginReducer = createReducer(
  user,
  on(loginVerified, (state, action) => {
    console.log("success")
    return { ...state, verified: true, error: '' }
  }),
  on(loginFailed, (state, action) => {
    return { ...state, verified: false, error: 'Incorrect username or password' }
  }),
  on(logout, (state, action) => {
    localStorage.removeItem("token")
    return { ...state, verified: false, error: '' }
  })
)

