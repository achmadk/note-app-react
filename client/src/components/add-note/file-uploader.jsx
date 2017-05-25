import React from 'react'
import {checkExtension} from 'modules/add-note/functions'

export default function FileUploader () {
  return (
    <div className="list-block">
      <ul>
        <li>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-input item-input-field">
                <a className="button button-raised button-fill file-button color-blue external">
                  <input name="image" type="file" onChange={checkExtension} />Upload Image
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
