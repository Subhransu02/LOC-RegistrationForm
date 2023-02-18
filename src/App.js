import React, { Component } from 'react';    
import './App.css';    
import AdmissionForm from './AdmissionForm';    
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Thanks from './Thanks';
    
export default class App extends Component {    
  render() {    
    return (    
      <div className="content">   
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AdmissionForm />} />
            <Route path='/thanks' element={<Thanks />} />
          </Routes>
        </BrowserRouter> 
      </div>    
    );    
  }    
}



