import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./main.scss"
import Home from "./components/Home";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
