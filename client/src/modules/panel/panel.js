import React from 'react'

import NoteFilters from 'components/panel/note-filters'

import {renderComponent} from 'modules/utils/functions'

import store from 'reducers/index'

export function init() {
  let component = <NoteFilters />,
  node = 'filter-content',
  directory = './../../components/panel/note-filters'

  renderComponent(component, node, directory)
}
