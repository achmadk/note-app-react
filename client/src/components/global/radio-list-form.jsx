import React, {Component} from 'react'

export default function RadioListForm({ option, index }) {
    let {title, name, value} = option
    return (
      <li>
        <label className="label-radio item-content">
          <input type="radio" name={name} value={value} defaultChecked={index == 0} />
          <div className="item-media">
            <i className="icon icon-form-radio" />
          </div>
          <div className="item-inner">
            <div className="item-title">{title}</div>
          </div>
        </label>
      </li>
    )
}
