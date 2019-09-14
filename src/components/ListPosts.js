import React, { useState, useEffect } from 'react'

import { loadPosts, updatePost, destroyPost } from '../lib/service'

import './ListPost.scss'

import { useStateValue } from '../lib/StateProvider'

export default function ListPosts() {

  const [noMoreLikes, setNoMoreLikes] = useState(false)
  const [{ posts }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadPosts();
      dispatch({
        type: 'loadAll',
        posts: data
      })
    };
    fetchData();
  }, []); // eslint-disable-line

  const like = async (e, post) => {
    e.preventDefault();
    setNoMoreLikes(true)
    try {

      const data = await updatePost({ ...post, likes: post.likes + 1 })
      
      const newPosts = posts.map(p => p.id === data.id ? data : p)
      
      dispatch({ type: 'loadAll', posts: newPosts })
      setNoMoreLikes(false)

    } catch (err) {
      console.log(err);
      setNoMoreLikes(false)
    }
  }

  const deletePost = async (e, post) => {
    e.preventDefault();
    try {
      await destroyPost(post.id)
      const newPosts = posts.filter(p => p.id !== post.id)

      dispatch({ type: 'loadAll', posts: newPosts })

    } catch (err) {
      console.log(err);
    }
  }

  const renderPost = post => {
    return (
      <div key={post.id} className="post">
        <pre>{post.post}</pre>
        <div className="likes">
          <div>
            <button className="btn" disabled={noMoreLikes} onClick={e => like(e, post)}>Like</button>
            <button className="btn btn-danger" onClick={e => deletePost(e, post)}>Delete</button>
          </div>
          <div>Likes {post.likes}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="posts-list">
      {posts.map(renderPost)}
    </div>
  )
}
