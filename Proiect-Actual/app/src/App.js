//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Link} from 'react-router-dom';
import createBT from './components/createBT';
import loginBT from './components/loginBT';
import loginME from './components/loginME';
import createME from './components/createME';
const Home = () => {
  return(
    <div><h1>Home</h1></div>
  )
}

const About = () =>
{
  return(
    <div><h1>About</h1></div>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <a href="./components/createBT">createBT</a>
        <a href="./components/loginBT">loginBT</a>
        <a href="./components/createME">createME</a>
        <a href="./components/loginME">loginME</a>
      </div>  

      <Switch>
        <Route path="/createBT" component={createBT} />
        <Route path="/loginBT" component={loginBT} />
        <Route path="/createME" component={createME} />
        <Route path="/loginME" component={loginME} />
      </Switch>
    </Router>
    
  );
}

export default App;
