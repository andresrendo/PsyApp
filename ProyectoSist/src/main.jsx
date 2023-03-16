import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App';
import { Login } from "./pages/LoginPage/Login"
import { Register } from "./pages/RegisterPage/Register"
import { Layout } from './components/Layout/Layout';
import { SearchDoctor } from './pages/SearchDoctorPage/SearchDoctor';
import { DoctorProfile } from './pages/DoctorProfile/DoctorProfile';
import { DOCTOR_PROFILE_URL, HOME_URL, LOGIN_URL, REGISTER_URL, BUSCAR_DOCTOR_URL, AGENDAR_URL} from './constants/urls';
import './index.css';
import {AgendarPage} from './pages/AgendarPage/AgendarPage';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<App />}/>
          <Route path={LOGIN_URL} element={<Login />}/>
          <Route path={REGISTER_URL} element={<Register />}/>
          <Route path= {BUSCAR_DOCTOR_URL} element={<SearchDoctor/>}/>
          <Route path={DOCTOR_PROFILE_URL} element={<DoctorProfile />}/>
          <Route path = {AGENDAR_URL} element={<AgendarPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
//<Route path = {CHAT_URL} element={<Chats /> }/>