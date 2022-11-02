
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgetpassword from './components/auth/Forgetpassword';
import { Login } from './components/auth/Login';
import Register from './components/auth/Register';
import { ResetPassword } from './components/auth/ResetPassword';
import HomePage from './components/HomePage';
import { ProtectedRoutes } from './Routes/ProtectedRoutes';
import { AuthProtectedRoute } from './Routes/AuthProtectedRoute';
import history from './history';
import './css/App.css';
function App() {
    return (
      <Router history={history} >
      <Routes>

        <Route element={<AuthProtectedRoute/>}>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/reg" exact={true} element={<Register />} />
          <Route path="/forgetpassword" exact={true} element={<Forgetpassword />} />
          <Route path='/resetPassword/:token' exact={true} element={<ResetPassword/>}/>
        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/homepage' exact={true} element={<HomePage/>}/>
        </Route>
      </Routes>
  </Router>

  );
}

export default App;
