import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App';
import { Login } from "./pages/LoginPage/Login"
import { Register } from "./pages/RegisterPage/Register"
import { Layout } from './components/Layout/Layout';
import { SearchDoctor } from './pages/SearchDoctorPage/SearchDoctor';
import { BUSCAR_DOCTOR_URL, HOME_URL, LOGIN_URL, REGISTER_URL } from './constants/urls';
import './index.css';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<App />}/>
          <Route path={LOGIN_URL} element={<Login />}/>
          <Route path={REGISTER_URL} element={<Register />}/>
          <Route path= {BUSCAR_DOCTOR_URL} element={<SearchDoctor/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
//<Route path = {CHAT_URL} element={<Chats /> }/>