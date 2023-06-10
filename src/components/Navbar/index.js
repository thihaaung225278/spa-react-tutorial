import React from 'react'
import './index.css'

export default function Navbar({setShowModal}) {
  return (
    <div className="navigation">
      <nav>
          <div className="container flex-wrap">
              <h3>Logo</h3>
              <ul>
                  <li><a href="#" onClick={() => setShowModal(true)}>Create Post</a></li>
              </ul>
          </div>
      </nav>
    </div>
  )
}
