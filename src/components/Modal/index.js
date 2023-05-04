import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

export default function Modal({children, danger = false}) {
  return (
    ReactDOM.createPortal(
      <div className="modalBox">
        <div className="modal-backdoor">
          <div className="modal" style={{
            border: '5px solid',
            borderColor: danger ? 'red': 'green'
          }}>
            {children}
          </div>
        </div>
      </div>, document.getElementById('modal-box')
    )
  )
}
