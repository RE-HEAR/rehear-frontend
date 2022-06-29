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
import QDetail_Login from "./screens/QuestionDetail_Login";
import QDetail_NonLogin from "./screens/QuestionDetail_NonLogin";
// import Intro from "./screens/intro";

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
    </Routes>
  );
}

export default App;
