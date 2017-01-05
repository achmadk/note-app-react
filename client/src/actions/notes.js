import API from 'api/config'

export const GET_NOTES = 'GET_NOTES'
export const POST_NOTE = 'POST_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const GET_NOTE = 'GET_NOTE'
export const REMOVE_SELECTED_NOTE = 'REMOVE_SELECTED_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export function getNotes() {
  return {
    type: GET_NOTES,
    payload: API.Note.all()
  }
}

export function postNewNote(data) {
  return {
    type: POST_NOTE,
    payload: API.Note.post({data})
  }
}

export function updateNote(id, data) {
  return {
    type: UPDATE_NOTE,
    payload: API.Note.update({id, data})
  }
}

export function getNote(id) {
  return {
    type: GET_NOTE,
    payload: API.Note.byId({id})
  }
}

export function removeSelectedNote() {
  return {
    type: REMOVE_SELECTED_NOTE,
    payload: {}
  }
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: API.Note.delete({id}),
    id    
  }
}
