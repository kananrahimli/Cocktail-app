
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Details from './pages/Details'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <Router>
       <Navbar></Navbar>
        <Switch>
           <Route exact path='/'>
              <Home></Home>
           </Route>
           <Route exact path='/about'>
              <About></About>
           </Route>
           <Route exact path='/details/:id'>
              <Details></Details>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
