import React from 'react'

import NoteLists from 'components/note-lists'

import {renderComponent} from 'modules/utils/functions'

export function init() {
  let component = <NoteLists />,
  node = 'sample-id',
  directory = './../../components/note-lists'

  renderComponent(component, node, directory)
}
