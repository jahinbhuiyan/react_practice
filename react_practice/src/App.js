import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

function App() {

  const title= 'Welcome to the new BLOG';
  const likes = 50;

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
          <p>Liked {likes} times</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
