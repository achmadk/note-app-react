import React from 'react'
import {renameTag, filterNote} from 'modules/panel/functions'

const NoteFilterItem = ({ item }) => {
  let name = renameTag(item)
  return (
    <li>
      <a href="#" data-name={name} className={`item-link item-content close-panel item-${item}`}
        onClick={filterNote}>
        <div className="item-inner">
          <div className="item-title">{name}</div>
        </div>
      </a>
    </li>
  )
}

export default NoteFilterItem
