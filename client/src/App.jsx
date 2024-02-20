import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import Prediction from './pages/prediction';


function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-white to-sky-300">
          <Routes>
            <Route path="/" element={<Login />} /> {/* Set the default route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path='/predict' element={<Prediction />} />
            
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
