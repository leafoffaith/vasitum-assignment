//Component Imports
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';

//CSS Imports
import './App.css';
import './Components/sidebar.css'
import './Components/navbar.css'
import './Components/dashboard.css'

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Navbar />
          <Dashboard />
        </div>
      </div>

    </div>
  );
}

export default App;
