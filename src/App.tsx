import React from 'react';
import './App.css';
import TestuseRef from './components/TestuseRef';
import { Parent } from './components/Parent';
import TestEffect from './components/TestEffect';
import GrandParent from './components/LearnContext/GrandParent';
import { AnotherGrandParent } from './components/LearnContext/AnotherGrandParent';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { ShowPosts } from './components/Posts/ShowPosts';

const App: React.FC = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <header className="App-header">
        This is a simple React application demonstrating component structure.
      </header>
      <Parent />
      <TestEffect />
      <TestuseRef />

      <h1>Context Example</h1>

      <GrandParent />
      <AnotherGrandParent />

      <div>

      <Routes>
        <Route
          path="/posts"
          element={
            <React.Suspense fallback={<div>Loading posts...</div>}>
              <ShowPosts />
            </React.Suspense>
          }
        />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>

      </div>
    </div>
  );
};

export default App;
