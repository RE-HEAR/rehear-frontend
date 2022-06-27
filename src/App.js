import * as React from 'react';
import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './screens/home'
import Login from './components/login';
import Join from './components/join';
import Category from './screens/category';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //         Hello World
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
        // <div>
        // </div>
    //   </header>
    // </div>
    <Routes>
      <Route exact path="/" component={Home}/>
      
    </Routes>
  );
}

export default App;
