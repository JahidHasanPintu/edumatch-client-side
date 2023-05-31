
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Tutors from './Components/Tutors/Tutors';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Account from './Components/Account/Account';
import PostProposal from './Components/PostProposal/PostProposal';

function App() {
  return (
    <div className="">

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/tutors" element={<Tutors />}></Route>
        <Route path="/create-proposal" element={<RequireAuth>
          <PostProposal />
        </RequireAuth>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/account" element={<RequireAuth>
          <Account />
        </RequireAuth>}></Route>

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
