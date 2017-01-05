import React from 'react'
import {unmountComponentAtNode} from 'react-dom'

import AddNoteNavbar from 'components/add-note/add-note-navbar'
import AddNoteForm from 'components/add-note/add-note-form'

import {changeNavbarColor} from './functions'
import {renderComponent} from 'modules/utils/functions'

const items = [{
  component: <AddNoteNavbar />,
  node: 'add-note-navbar',
  directory: './../../components/add-note/add-note-navbar'
}, {
  component: <AddNoteForm />,
  node: 'add-note-page',
  directory: './../../components/add-note/add-note-form'
}]

export function init() {
  items.map(item => {
    let {component, node, directory} = item
    renderComponent(component, node, directory)
    return item
  })
  changeNavbarColor()
}

export function afterBack() {
  window.image = null
  items.map(item => {
    let {component, node, directory} = item
    unmountComponentAtNode(document.getElementById(node))
    return item
  })
}
