
import './App.css';
import Navbar from './components/partials/Navbar';
import Users from './components/users/Users';
import UsersItem from './components/users/UsersItem';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <br />
      <div className="container mt-2">
      <switch>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/users/:login" component={UsersItem}/>
      <Route exact  component={Users}/>

      </switch>
      </div>
      
        </div>
        </Router>
  );
}

export default App;
