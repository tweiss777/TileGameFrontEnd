import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Login from "./pages/Login";
import AuthenticationProvider from "./Contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <AuthenticationProvider>
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path='/' element={<Login />} />
          </AuthenticationProvider>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
