
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgetpassword from './components/auth/Forgetpassword';
import { Login } from './components/auth/Login';
import Register from './components/auth/Register';
import { ResetPassword } from './components/auth/ResetPassword';
import HomePage from './components/HomePage';
import './css/App.css';
function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/reg" exact={true} element={<Register />} />
        <Route path="/forgetpassword" exact={true} element={<Forgetpassword />} />
        <Route path='/homepage' exact={true} element={<HomePage/>}/>
        <Route path='/resetPassword/:token' exact={true} element={<ResetPassword/>}/>
      </Routes>
  </Router>

  );
}

export default App;
