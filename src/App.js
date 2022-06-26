import Home from "./screens/Home";
import QBoard from "./screens/QuestionBoard.js";
import RegisterQ from "./screens/RegisterQuestion.js";
import QDetail_Login from "./screens/QuestionDetail_Login";
import QDetail_NonLogin from "./screens/QuestionDetail_NonLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuestionBoard" element={<QBoard />} />
        <Route path="/RegisterQuestion" element={<RegisterQ />} />
        <Route path="/QuestionDetail_Login" element={<QDetail_Login />} />
        <Route path="/QuestionDetail_Login" element={<QDetail_NonLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
