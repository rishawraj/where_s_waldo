import { Game } from "./components/Game";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/AuthPages/Login";
import SignUp from "./components/AuthPages/SignUp";
import "./App.css";
import { GameList } from "./components/GameList";
import ForgotPassword from "./components/AuthPages/ForgotPassword";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gamelist" element={<GameList />} />
            <Route path="/game" element={<Game />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
