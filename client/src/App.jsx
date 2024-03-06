import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import Prediction from './pages/prediction';
import DietCard from './pages/diet';
import ExcersiseCard from './pages/excersise';


function App() {
  const isMobile = window.innerWidth <= 765;

  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="w-[1600px] h-[1200px] relative bg-orange-50 shadow">
        
        
          <Routes>
            <Route path="/" element={<Login />} /> {/* Set the default route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path='/predict' element={<Prediction />} />
            <Route path='/diet' element={<DietCard />} />
            <Route path='/exc' element={<ExcersiseCard />} />
            
            
          </Routes>
          
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
