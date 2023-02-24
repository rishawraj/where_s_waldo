import { Game } from "./components/Game";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/AuthPages/Login";
import SignUp from "./components/AuthPages/SignUp";
import "./App.css";
import { GameInfo } from "./components/GameInfo";
import ForgotPassword from "./components/AuthPages/ForgotPassword";
import { Nav } from "./components/Nav";
import About from "./components/About";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gameinfo" element={<GameInfo />} />
            <Route path="/game" element={<Game />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
