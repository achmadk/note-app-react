import {
  GET_NOTES,
  POST_NOTE,
  UPDATE_NOTE,
  GET_NOTE,
  REMOVE_SELECTED_NOTE,
  DELETE_NOTE
 } from 'actions/notes'
import {GET_LOCATION} from 'actions/location'

const initialState = {
  loading_notes: false,
  loading_note: false,
  error: null,
  notes: [],
  selected_note: {},
  categories: ["rumah", "kerja", "agama"],
  tags: ["red", "yellow", "green"],
  location: null
}

export default function noteReducers(state = initialState, action) {
  switch (action.type) {
    case `${GET_NOTES}_PENDING`:
      return { ...state, loading_notes: true }
      break;
    case `${GET_NOTES}_FULFILLED`:
      return {
        ...state,
        loading_notes: false,
        notes: action.payload.data,
        error: null
      }
      break;
    case `${GET_NOTES}_REJECTED`:
      return { ...state, loading_notes: false, error: action.payload.request }
      break;
    case `${GET_NOTE}_PENDING`:
    case `${POST_NOTE}_PENDING`:
    case `${UPDATE_NOTE}_PENDING`:
    case `${DELETE_NOTE}_PENDING`:
      return { ...state, loading_note: true }
      break;
    case `${GET_NOTE}_FULFILLED`:
      return { ...state, loading_note: false, selected_note: action.payload.data, error: null }
      break;
    case `${GET_NOTE}_REJECTED`:
    case `${POST_NOTE}_REJECTED`:
    case `${UPDATE_NOTE}_REJECTED`:
    case `${DELETE_NOTE}_REJECTED`:
      return { ...state, loading_note: false, error: action.payload.request }
      break;
    case `${POST_NOTE}_FULFILLED`:
      return { ...state, loading_note: false, notes: [action.payload.data, ...state.notes] }
      break;
    case `${UPDATE_NOTE}_FULFILLED`:
      return { ...state, loading_note: false, error: null, selected_note: action.payload.data }
      break;
    case `${DELETE_NOTE}_FULFILLED`:
      let index = state.notes.findIndex(note => note._id === action.payload.data._id)
      console.log(index)
      return {
        ...state,
        loading_note: false,
        error: null,
        notes: [
          ...state.notes.slice(0, index),
          ...state.notes.slice(index + 1)
        ],
        selected_note: {}
      }
      break;
    case REMOVE_SELECTED_NOTE:
      window.image = null
      return { ...state, selected_note: {} }
      break;
    case `${GET_LOCATION}_FULFILLED`:
      return {...state, location: action.payload}
      break;
    case `${GET_LOCATION}_REJECTED`:
      return {...state, location: null}
      break;
  }
  return state
}
