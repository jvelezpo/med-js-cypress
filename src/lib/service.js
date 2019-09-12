import axios from 'axios'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 299) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const savePost = post =>
  axios.post('http://localhost:3030/api/posts', post)
    .then(checkStatus)
    .then(res => res.data)

export const loadPosts = () =>
  axios.get('http://localhost:3030/api/posts?_sort=likes&_order=desc')
    .then(checkStatus)
    .then(res => res.data)

export const destroyPost = id =>
  axios.delete(`http://localhost:3030/api/posts/${id}`)
    .then(checkStatus)
    .then(res => res.data)

export const updatePost = post =>
  axios.put(`http://localhost:3030/api/posts/${post.id}`, post)
    .then(checkStatus)
    .then(res => res.data)
