import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
<<<<<<< HEAD
          <Route path='/' element={<Login /> }/>
=======
          <Route path="/" element={<Login />} />
>>>>>>> aae9dd6031771361d13c1257587968c7aabbfa57
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
