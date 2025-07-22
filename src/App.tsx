import React from 'react';
import './App.css';
import TestuseRef from './components/TestuseRef';
import { Parent } from './components/Parent';
import TestEffect from './components/TestEffect';
import GrandParent from './components/LearnContext/GrandParent';
import { AnotherGrandParent } from './components/LearnContext/AnotherGrandParent';
import { Link, Outlet} from 'react-router-dom';
import { useLocation } from 'react-router'

const App: React.FC = () => {
  let location = useLocation();

  React.useEffect(() => {
    console.log(`Page changed to: ${location.pathname}`);
  }, [location]);

  const renderExtraContent = () => {
    if (location.pathname !== '/') return null;

    console.log("Rendering extra content for path:", location.pathname);
    return (
      <>
        <Parent />
        <TestEffect />
        <TestuseRef />

        <h1>Context Example</h1>

        <GrandParent />
        <AnotherGrandParent />
      </>
    );
  };

  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/learn-usememo">Learn useMemo</Link>
        <Link to="/redux-toolkit">Redux Toolkit Counter</Link>
        <Link to="/users">Users</Link>
        <Link to="/create-user">Create User</Link>
      </nav>
      <header className="App-header">
        {/* This is a simple React application demonstrating component structure. */}
      </header>

      {/* <Parent />
      <TestEffect />
      <TestuseRef />

      <h1>Context Example</h1>

      <GrandParent />
      <AnotherGrandParent /> */}

      <div>
      {/* Add any additional content or comments here */}

      {/* // This is the old way using React Router
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
      </Routes> */}
      </div>

      {renderExtraContent()}

      <Outlet />
    </div>
  );
};

export default App;
