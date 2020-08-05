import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Welcome from './Welcome';
import Welcome1 from './Welcome1';
import SampleState from './SampleState';
import HookCounter from './HookCounter';
import Resume from './components/Resume';
import Task from './components/Task';
import data from './data/data.json';
import woman from './images/woman.svg';
import man from './images/man.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home/>
      <Welcome name="Vins">
        <h5>Child of Vins</h5>
      </Welcome>
      <Welcome name="Vinny"></Welcome>
      <Welcome name="Vinmayi"></Welcome>
      <Welcome name="Swamy"/>
      <Welcome1 data="Vivek"></Welcome1>
      <Welcome1 data="Vignan"></Welcome1> */}

      {/* <SampleState></SampleState>
      <HookCounter /> */}
      {/* <CardView></CardView> */}
      <BrowserRouter>
        <Route exact path="/" component={Task} />
        <Route exact path="/resume" component={Resume} />
      </BrowserRouter>
    </div>
  );
}

let CardView=()=>{
  let profileData = data.details;
  let images = [woman,man]
  console.log(profileData);
  return(
    <div className="row justify-content-center">
      {profileData.map((cardsData,index)=>(
        <div className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
          <div className="card">
            <div className="card-body">
              <img src={images[index]} alt="profile" style={{width:"40%"}} />
              <h1>{ cardsData.profile.name }</h1>
              <h5 className="text-secondary">{ cardsData.profile.role }</h5>
              <a href={"tel:"+cardsData.profile.mobile}><h5>{ cardsData.profile.mobile }</h5></a>
              <a href={"mailto:"+cardsData.profile.email}><h5>{ cardsData.profile.email }</h5></a>
              <Link to={{pathname:'/resume', data1:{id:index}}} className="btn btn-primary">View Profile</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
