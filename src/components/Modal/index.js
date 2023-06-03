import React from 'react'
import "./index.css"
import ReactDOM from 'react-dom'

export default function Modal({children, theme = false}) {
  return (  
    ReactDOM.createPortal(
      <div className="modalBox">
        <div className="modal-bg">
            <div className="modal" style={{
              border: '4px solid',
              borderColor: theme ? "blue": "red"
            }}>
                {children}
            </div>
        </div>
      </div>, document.getElementById("modal-root")
    )  
  )
}
