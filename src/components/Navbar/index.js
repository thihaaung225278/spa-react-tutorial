import React from 'react'
import './index.css'

export default function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <h1>Logo</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Posts</a></li>
            </ul>
        </div>
    </nav>
  )
}
