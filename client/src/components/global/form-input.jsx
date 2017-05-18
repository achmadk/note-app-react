import React from 'react'
import classname from 'classname'

export default function FormInput({ input }) {
  var insertedInput
  switch (input.type) {
    case 'text':
      insertedInput = <input type={input.type} name={input.name} placeholder={input.placeholder} />
      break;
    case 'textarea':
      insertedInput = <textarea name={input.name} className="resizable" placeholder={input.placeholder} />
      break;
  }
  let className = classname({'align-top': input.type == "textarea"})
  return (
    <li className={className}>
      <div className="item-content">
        <div className="item-inner">
          <div className="item-title floating-label">{input.title}</div>
          <div className="item-input item-input-field">
            {insertedInput}
          </div>
        </div>
      </div>
    </li>
  )
}
