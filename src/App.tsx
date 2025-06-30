import React from 'react';
import './App.css';
import TestuseRef from './components/TestuseRef';
import { Parent } from './components/Parent';
import TestEffect from './components/TestEffect';

const App: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        This is a simple React application demonstrating component structure.
      </header>
      <Parent />
      <TestEffect />
      <TestuseRef />
    </div>
  );
};

export default App;
