import React from 'react'

import { useStateValue } from '../lib/StateProvider'

import './Stats.scss'

export default function Stats() {

  const [{ posts }] = useStateValue();

  return (
    <div className="stats">
      <div>
        Total posts: <span className="total-posts">{posts.length}</span>
      </div>
      <div>
        Total Likes: <span className="total-posts-likes">{posts.reduce((total, n) => total + n.likes, 0)}</span>
      </div>
    </div>
  )
}
