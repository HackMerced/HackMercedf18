import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Titlescreen from './components/titlescreen';


import './assets/css/default.css';
import './assets/css/body.css';
import './assets/css/basic.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Titlescreen/>
        <Footer/>
      </div>
    );
  }
}

export default App;
