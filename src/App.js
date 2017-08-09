import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
    	<div className="App">
    		<Header title="拉勾网"/>	
    			{this.props.children}
    		<Footer/>	
    	</div>
    )
  }
}

export default App
