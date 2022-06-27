import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './screens/Home';
import Login from './screens/login';
import Join from './screens/join';
import Category from './screens/category';
import QnA_page1 from './screens/QuestionBoard';
import QnA_page2 from './screens/RegisterQuestion';
import Intro from './screens/intro';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/join" element={<Join />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/qna_page1" element={<QnA_page1/>}/>
        <Route path="/qna_page2" element={<QnA_page2/>}/>
        <Route path="/intro" element={<Intro/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
