import React from 'react'

import NoteFilterItem from './note-filter-item'

const NoteFilterContent = ({ content }) => {
  let titleText = `by ${content.name}`,
  items = content.values.map((item,i) => <NoteFilterItem item={item} key={i} />)
  return (
    <div>
      <div className="content-block-title">{titleText}</div>
      <div className="list-block">
        <ul>
          {items}
        </ul>
      </div>
    </div>
  )
}

export default NoteFilterContent
