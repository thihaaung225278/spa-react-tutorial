import React from 'react'
import './index.css'

export default function Navbar({setShowModal}) {
  return (
    <nav>
        <div className="navbar">
            <h1>Logo</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#" onClick={()=>setShowModal(true)}>Sign In</a></li>
            </ul>
        </div>
    </nav>
  )
}
