import {createSelector} from 'reselect'

import {sortByDate} from 'modules/utils/functions'

export const getNotes = ({notes}) => notes

export const getError = ({error}) => error

export const getNoteTags = ({tags}) => tags

export const getNoteCategories = ({categories}) => categories

export const getSelectedNote = ({selected_note}) => selected_note

export const getLoadingNote = ({loading_note}) => loading_note

export const checkLoadingNote = createSelector(
  [getSelectedNote, getLoadingNote],
  (selectedNote, loadingNote) => loadingNote && !(selectedNote && selectedNote._id)
)

export const getLoadingNotes = ({loading_notes}) => loading_notes

export const checkLoadingNotes = createSelector(
  [getNotes, getLoadingNotes],
  (notes, loadingNotes) => loadingNotes && !(notes.length > 0)
)

export const getSortedNotes = createSelector(
  [getNotes],
  (notes) => notes.sort(sortByDate)
)
