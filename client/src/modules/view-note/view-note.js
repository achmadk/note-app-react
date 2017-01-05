import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import ViewNoteNavbar from 'components/view-note/view-note-navbar'
import ViewNoteContent from 'components/view-note/view-note-content'

import {renderComponent} from 'modules/utils/functions'

const itemsRendered = [{
  node: "view-note-navbar",
  directory: './../../components/view-note/view-note-navbar'
}, {
  component: <ViewNoteContent />,
  node: "view-note-page",
  directory: './../../components/view-note/view-note-content'
}]


export function init({id}) {
  itemsRendered[0].component = <ViewNoteNavbar id={id} />
  itemsRendered.map(item => {
    renderComponent(item.component, item.node, item.directory)
    return item
  })
}

export function afterBack() {
  itemsRendered.map(item => {
    unmountComponentAtNode(document.getElementById(item.node))
    return item
  })
}
