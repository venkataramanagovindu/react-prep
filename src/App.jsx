import './App.css';
import { Parent } from './components/Parent';
import TestEffect from './components/TestEffect';
import TestuseRef from './components/TestuseRef';

function App() {
  return (
    <div>
      <header className="App-header">
        This is a simple React application demonstrating component structure.
      </header>
      <Parent/>
      <TestEffect />
      <TestuseRef />
    </div>
  );
}

export default App;
