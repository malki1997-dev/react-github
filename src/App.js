
import './App.css';
import Navbar from './components/partials/Navbar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="container mt-2">
      <Users />
      </div>
      
        </div>
  );
}

export default App;
