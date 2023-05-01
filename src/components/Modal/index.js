import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

export default function Modal({children}) {
  return (
    ReactDOM.createPortal(
      <div className="modal-backdoor">
        <div className="modal">
          {children}
        </div>
      </div>, document.getElementById('modal-box')
    )
  )
}
