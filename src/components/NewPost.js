import React, { useState } from 'react'

import { savePost, loadPosts } from '../lib/service'
import { useStateValue } from '../lib/StateProvider'

import './NewPost.scss';

export default function NewPost() {
  
  const [post, setPost] = useState('')
  const dispatch = useStateValue()[1];

  const add = async e => {
    e.preventDefault()
    try {
      await savePost({
        post,
        likes: 0
      })
      setPost('')
      const posts = await loadPosts()
      dispatch({
        type: 'loadAll',
        posts: posts
      })
    } catch (err) {
      console.log('=============================');
      console.log(err);
      console.log('=============================');
    }
  }

  return (
    <div className="new-post">
      <textarea rows="4" cols="48" value={post} onChange={e => setPost(e.target.value)} />
      <button onClick={add} className="btn add-btn" disabled={post === '' ? true : false}>Add</button>
    </div>
  )
}
