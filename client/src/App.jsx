import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import Prediction from './pages/prediction';

import DietCard from './pages/diet';
import ExcersiseCard from './pages/exec'
import Chat from './pages/chat';

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="w-full h-screen flex flex-col ">
          <Routes>
            <Route path="/" element={<Login />} /> {/* Set the default route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path='/predict' element={<Prediction />} />
          
            <Route path='/diet' element={<DietCard />} />
            <Route path='/exec' element={<ExcersiseCard />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
