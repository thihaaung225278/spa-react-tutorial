import React from 'react'
import "./index.css"
import ReactDOM from 'react-dom'

export default function Modal({children, theme = false, setShowModal}) {

  let className = theme ? "border-blue": "border-red"

  return (  
    ReactDOM.createPortal(
      <div className="modalBox">
        <div className="modal-bg">
            <div className={`modal ${className}`}>
                {children}
                <button className="close" onClick={() => setShowModal(false)}>Close</button>
            </div>
        </div>
      </div>, document.getElementById("modal-root")
    )  
  )
}
