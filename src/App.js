import React from 'react';

import { StateProvider } from './lib/StateProvider'
import NewPost from './components/NewPost'
import ListPosts from './components/ListPosts'
import Stats from './components/Stats'

import './App.scss';

function App() {
  const initialState = {
    posts: []
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'loadAll':
        return { posts: action.posts }
      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="header">
          <span>Cypress end to end como si no hubiera un mañana</span>
        </header>
        <div className="container">
          <NewPost />
          <Stats />
          <ListPosts />
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
