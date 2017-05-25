import React from 'react'
import moment from 'moment'

import {renameTag} from 'modules/panel/functions'

export default function NoteList({ list }) {
    let {image, tag, date_created, _id, title, category, content} = list,
    includedImage = image && (
      <div className="item-media">
        <img src={image} width="80" />
      </div>
    ),
    name = renameTag(tag),
    date = moment(date_created, 'DD/MM/YYYY HH:mm:ss').fromNow(true)
    return (
      <li className="swipeout">
        <a href={`view-note.html?id=${_id}`} data-id={_id} className={`item-content item-link item-${tag}`} >
          {includedImage}
          <div className="item-inner">
            <div className="item-title-row">
              <div className="item-title">{title}</div>
              <div className="item-after">{date}</div>
            </div>
            <div className="item-subtitle">
              <span className="badge">{category}</span>
              <span style={{display: "none"}}>{name}</span>
            </div>
            <div className="item-text">{content}</div>
          </div>
        </a>
      </li>
    )
}
