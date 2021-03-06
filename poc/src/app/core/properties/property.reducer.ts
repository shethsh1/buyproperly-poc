import { fetchPropertiesFulfilled, fetchPropertyFulfilled, fetchPropertyLoading, fetchPropertyRejected } from './property.actions'
import { Properties, properties } from './property.state'
import { createReducer, on } from '@ngrx/store';

export const propertiesReducer = createReducer(
  properties,
  on(fetchPropertiesFulfilled, (state, action: { properties: Properties }) => {
    return { ...state, totalCount: action.properties.totalCount, data: action.properties.data }
  }),
  on(fetchPropertyFulfilled, (state, action) => {
    return { ...state, activeProperty : action.property, loadingProperty: false}
  }),
  on(fetchPropertyLoading, (state, action) => {
    return { ...state, loadingProperty: true}
  }),
  on(fetchPropertyRejected, (state, action) => {
    return { ...state, activeProperty : undefined, loadingProperty: false}
  })
)