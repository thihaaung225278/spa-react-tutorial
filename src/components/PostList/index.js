import React from 'react'
import "./index.css"

export default function PostList({posts}) {
  return (
    <div className="postLists">
      <div className="container">
          <div className="post-lists">
              {
                  posts.map(post => <div className="single-post" key={post.id}>{post.title}</div>)
              }
          </div>
      </div>
    </div>
  )
}
