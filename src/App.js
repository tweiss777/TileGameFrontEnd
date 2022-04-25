import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Login from "./pages/Login";
import AuthenticationProvider from "./Contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthenticationProvider>
          <Routes>
            <ProtectedRoute
              Route
              path="/home"
              element={<Home />}></ProtectedRoute>
            <ProtectedRoute
              Route
              path="/game"
              element={<Game />}></ProtectedRoute>
            <Route path="/" element={<Login />} />
          </Routes>
        </AuthenticationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
