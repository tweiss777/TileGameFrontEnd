import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Login from "./pages/Login";
import AuthenticationProvider from "./Contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { setAuthHeader } from "./services/server";
function App() {

  useEffect(() => setAuthHeader(localStorage.getItem('token')))

  return (
    <div className="App">
      <BrowserRouter>
        <AuthenticationProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/game"
              element={
                <ProtectedRoute>
                  <Game />{" "}
                </ProtectedRoute>
              }
            />

            <Route path="/" element={<Login />} />
          </Routes>
        </AuthenticationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
