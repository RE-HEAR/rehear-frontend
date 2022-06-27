import * as React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/login";
import Join from "./screens/join";
// import Category from "./screens/category";
import QBoard from "./screens/QuestionBoard";
import RegisterQ from "./screens/RegisterQuestion";
// import Intro from "./screens/intro";

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      {/* <Route path="/category" element={<Category />} /> */}
      <Route path="/QuestionBoard" element={<QBoard />} />
      <Route path="/RegisterQuestion" element={<RegisterQ />} />
      {/* <Route path="/intro" element={<Intro />} /> */}
    </Routes>
  );
}

export default App;
