import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/HeaderComponent/HeaderComponent';
import Settings from './components/SettingsComponent/SettingsComponent'
import DashBoard from './components/dashBoard/dashBoard';
import './components/dashBoard/dashBoard.css';
import Login from './components/Login/Login';
import './App.css';
import Administration from './components/Administration/Administration';
import AddContent from './components/AddContent/AddContent';
import AddPost from './components/AddPost/AddPost';
import FieldTypes from './components/FieldTypes/FieldTypes';

const contentType = () => <p>contentType</p>
const Menues = () => <p>Menues</p>
const allFields = () => <p>allFields</p>

class App extends Component {



  render() {
    return (
    	<div>
             <BrowserRouter>
              <div className="">
                 <div className="">
	                  <Route exact path="/login/" component={Login} />
	                  <Route exact path="/administration/" component={Administration} />
	                  <Route exact path="/administration/contentType" component={contentType} />
	                  <Route exact path="/administration/Menues" component={Menues} />
	                  <Route exact path="/administration/allFields" component={allFields} />
               </div>
               </div>
             </BrowserRouter>
		  </div>
		
    );
  }
}

export default App;
