import { createAction, props } from '@ngrx/store';
import { Properties } from './property.state'

export const fetchProperties = createAction(
  '[Get Properties] Fetch properties from API',
  props<{ limit: number; offset: number }>()
)

export const fetchPropertiesFulfilled = createAction(
  '[Get Properties Success] Fetch properties from API successful',
  props<{ properties: Properties }>()
)

