import React, { Component } from 'react';    
import './App.css';    
import AdmissionForm from './AdmissionForm';    
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Thanks from './Thanks';
import InductionForm from './InductionForm';
    
export default class App extends Component {    
  render() {    
    return (    
      <div className="content">   
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<AdmissionForm />} /> */}
            <Route path='/' element={<InductionForm />} />
            <Route path='/thanks' element={<Thanks />} />
          </Routes>
        </BrowserRouter> 
      </div>    
    );    
  }    
}



