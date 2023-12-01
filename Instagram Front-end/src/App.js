import './App.css';
import NavBar from './components/Navbar'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import Signup from './pages/Signup.js';
import CreatePost from './pages/Createpost.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="createpost" element={<CreatePost />} />
        </Route>
      </Routes>

       
      </BrowserRouter>
    </div>
  );
}

export default App;
