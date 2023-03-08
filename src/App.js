
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Tutors from './Components/Tutors/Tutors';

function App() {
  return (
    <div className="">
      
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tutors" element={<Tutors/>}></Route>

      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
