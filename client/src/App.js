import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Custom from './components/custom/custom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import AllJacketsPage from './AllJacketsPage';
import CheckOutPage from './CheckOutPage';

export default function App() {
  const [jackets, setJackets] = useState([])

  useEffect(() => {
    axios.get('https://project4-jackets.onrender.com')
    .then((response) => setJackets(response.data), (err) => console.log(err));
    })

  return (
      <Router>
      <main className="App">
          <NavBar />
        <Routes>
           <Route path="/" element={<AllJacketsPage />} />
           <Route exact path="/login" element={<Login />} />
           <Route path="/signin" element={<Login />} />
           <Route path="/sign-up" element={<Signup />} />
           <Route path="/custom" element={<Custom />} />
           <Route path="/checkout" element={<CheckOutPage />} />
       </Routes> 
      </main>
    </Router> 
    );
}