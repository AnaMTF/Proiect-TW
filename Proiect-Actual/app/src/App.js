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
    <div className="App">
    <header className="App-header">
    <head>
      <title></title>
      <link href="welcome.css" rel="stylesheet" type="text/css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
      <script src="index.js"></script>
    </head>
    <body>
    <div class="container">
      <br/><br/><br/><br/>
      <label id="titlu" style={{"font-weight":"bold"}}>Welcome</label>
      <br/><br/>
      <br />
      <div class="row">
          <div class="col" id="grad1" style={{"border": "0.2px solid #560bad"}}>
              <br/>
              <label style={{"font-weight":"bold" ,"font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Want to upload a project?</label>
              <br/><br/>
              <button class="btn btn-primary m-2" id="createMembruEchipa" onclick="createMembruEchipa()">Create MembruEchipa account</button>
              <br/><br/>
              <button class="btn btn-primary m-3" id="loginMembruEchipa" onclick="loginMembruEchipa()">Log in as MembruEchipa</button>
              <br/>
          </div>
          <div class="col-1"></div>
          <div class="col" id="grad1" style={{"border": "0.2px solid #560bad"}}>
              <br/>
              <label style={{"font-weight":"bold" ,"font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Want to test some bugs?</label>
              <br/><br/>
              <button class="btn btn-primary m-3" id="createBugTester" onclick="createBugTester()">Create BugTester account</button>
              <br/><br/>
              <button class="btn btn-primary m-3" id="loginBugTester" onclick="loginBugTester()">Log in as BugTester</button>
              <br/>
          </div>
      </div>
  </div>
    </body>
    </header>
    </div>
    
  );
}

export default App;
