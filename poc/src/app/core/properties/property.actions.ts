import { createAction, props } from '@ngrx/store';
import { Properties } from './property.state'

/* full properties */
export const fetchProperties = createAction(
  '[Get Properties] Fetch properties from API',
  props<{ limit: number; offset: number }>()
)

export const fetchPropertiesFulfilled = createAction(
  '[Get Properties Success] Fetch properties from API successful',
  props<{ properties: Properties }>()
)

/* single property */
export const fetchProperty = createAction(
  '[Get Property] Fetch a single property',
  props<{ slurp : string }>()
)

export const fetchPropertyFulfilled = createAction(
  '[Get Property Success] Fetch property from API successful',
  props<{ property: any }>()
)

export const fetchPropertyLoading = createAction(
  '[Get Property Loading] Fetch property from API is loading',
)

export const fetchPropertyRejected = createAction(
  '[Get Property Rejected] Fetch property from API not successful',
)

