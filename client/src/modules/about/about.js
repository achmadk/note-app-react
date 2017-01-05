import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import AboutContent from 'components/about/about-content'

export function init() {
  $('.about-app').on('open', () => {
    render(<AboutContent />, document.getElementById('about-content'))
  })

  $('.about-app').on('closed', () => {
    unmountComponentAtNode(document.getElementById('about-content'))
  })
}
