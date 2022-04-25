<<<<<<< HEAD
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/game"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Game />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
=======
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
        <AuthenticationProvider>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </AuthenticationProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
>>>>>>> authenticationContext
