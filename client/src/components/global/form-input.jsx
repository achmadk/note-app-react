import React from 'react'
import classname from 'classname'

export default function FormInput({ input }) {
  let {type, name, placeholder, title} = input
  let insertedInput = selectInputType(input)
  let className = classname({ 'align-top': type === 'textarea' })
  return (
    <li className={className}>
      <div className="item-content">
        <div className="item-inner">
          <div className="item-title floating-label">{title}</div>
          <div className="item-input item-input-field">
            {insertedInput}
          </div>
        </div>
      </div>
    </li>
  )
}

function selectInputType (input) {
  let {type, name, placeholder, title} = input
  switch (type) {
    case 'text':
      return <input type={type} name={name} placeholder={placeholder} />
    case 'textarea':
      return <textarea name={name} className="resizable" placeholder={placeholder} />
  }
}
