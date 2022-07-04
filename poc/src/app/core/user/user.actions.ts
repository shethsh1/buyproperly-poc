import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Form] Authenticate user',
  props<{ email: string; password: string }>()
)

export const loginVerified = createAction('[Login Form] login verified')
export const loginFailed = createAction('[Login Form] login failed')

