import React from 'react'

import { useStateValue } from '../lib/StateProvider'

import './Stats.scss'

export default function Stats() {

  const [{ posts }] = useStateValue();

  return (
    <div className="stats">
      Total posts: {posts.length}
      <br />
      Total Likes: {posts.reduce((total, n) => total + n.likes, 0)}
    </div>
  )
}
