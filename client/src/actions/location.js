import {getLocationPromise} from 'modules/utils/functions'

export const GET_LOCATION = 'GET_LOCATION'

export function getLocation() {
  return {
    type: GET_LOCATION,
    payload: getLocationPromise()
  }
}
