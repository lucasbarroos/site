import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/index';
import Blog from './pages/Blog/index';
import BlogPost from './pages/BlogPost/index';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/blog/:id">
            <BlogPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
