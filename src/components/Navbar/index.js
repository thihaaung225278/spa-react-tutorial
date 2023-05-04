import React from 'react'
import './index.css'

export default function Navbar({setShowModal}) {
  return (
    // တစ်ခြား componet က css class တွေယူသုံး ရင် effect ဖြစ်နေတယ် / အဲ့လိုမဖြစ်အောင် parent div မှာ className ပေးပြီးထိန်း ထားရမယ်
    <nav className="navigation">
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
