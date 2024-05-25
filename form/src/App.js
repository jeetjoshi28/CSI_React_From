import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
class App extends Component {
 render() {
 return (
 <div className="App demoForm">
 <h1 style={{color:'white'}}>React Form </h1>
 
 <RegistrationForm />
 </div>
 );
 }
}

export default App;
