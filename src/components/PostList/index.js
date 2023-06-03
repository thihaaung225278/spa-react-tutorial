import React from 'react'
import "./index.css"
import styles from "./single_post.module.css"

export default function PostList({posts}) {
  return (
    <div className="postLists">
      <div className="container">
          <div className="post-lists">
              {
                  posts.map(post => <div className={`single-post ${styles.card}`} key={post.id}>{post.title}</div>)
              }
          </div>
      </div>
    </div>
  )
}
