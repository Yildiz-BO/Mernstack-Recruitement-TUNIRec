import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//profiles
import dashboard from './components/dashboard/dashboard';
import CreateProfile from './components/createprofile/CreateProfile';
import editprofle from './components/editProfile/editprofile';
import addExperience from './components/addExperience/addExperience';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profileComponents/Profile';
//offres
import Offre from './components/offreComponents/Offre';
import Info from './components/offreComponents/Info';

import offreDashboard from './components/offreDashboard/offreDashboard';
import createoffre from './components/createoffre/createoffre';
import editOffre from './components/editOffre/editOffre';


import store from './store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar/>
        <Route exact path="/" component={Home}/>
        <div className="container">
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={dashboard}/>
        <Route exact path="/createprofile" component={CreateProfile}/>
        <Route exact path="/editprofile" component={editprofle}/>
        <Route exact path="/addexp" component={addExperience}/>
        <Route exact path="/userprofile" component={Profiles}/>
        <Route exact path="/userprofile/:profilename" component={Profile}/>
        
        <Route exact path="/offreDashboard" component={offreDashboard}/>
        <Route exact path="/createoffre" component={createoffre}/>
        <Route exact path="/editOffre" component={editOffre}/>
        <Route exact path="/offreComponents" component={Offre}/>
        <Route exact path="/offreComponents" component={Info}/>

        <Route exact path="/offres/:jobTiltle" component={Offre}/>

        </div>
        <Footer/>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
