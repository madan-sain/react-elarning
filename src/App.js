
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <div>
      <Header className="navbar"/>   
      <Routes>
      <Route path='/' element={<Home />}  className=""/>        
      <Route path='Home' element={<Home />}  className=""/>        
      <Route path='About' element={<About />}  className=""/>              
      </Routes>    
      <Footer />
    </div>

  );
}

export default App;
