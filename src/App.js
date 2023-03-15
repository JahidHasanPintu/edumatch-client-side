
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Tutors from './Components/Tutors/Tutors';

function App() {
  return (
    <div className="">
      
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tutors" element={<Tutors/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
