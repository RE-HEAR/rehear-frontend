import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Home from "./screens/Home";
import Login from "./screens/login";
import Join from "./screens/join";
// import Category from "./screens/category";
import QBoard from "./screens/QuestionBoard";
import RegisterQ from "./screens/RegisterQuestion";
import QDetail_Login from "./screens/QuestionDetail_Login";
import QDetail_NonLogin from "./screens/QuestionDetail_NonLogin";
import Intro from "./screens/intro";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        {/* <Route path="/category" element={<Category />} /> */}
        <Route path="/QuestionBoard" element={<QBoard />} />
        <Route path="/RegisterQuestion" element={<RegisterQ />} />
        <Route path="/QuestionDetail_Login" element={<QDetail_Login />} />
        <Route path="/QuestionDetail_NonLogin" element={<QDetail_NonLogin />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
