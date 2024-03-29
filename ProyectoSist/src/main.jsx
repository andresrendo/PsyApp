import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App';
import { Login } from "./pages/LoginPage/Login"
import { Register } from "./pages/RegisterPage/Register"
import { Layout } from './components/Layout/Layout';
import { SearchDoctor } from './pages/SearchDoctorPage/SearchDoctor';
import { DoctorProfile } from './pages/DoctorProfile/DoctorProfile';
import { Chat } from './pages/Chat/Chat'
import { DOCTOR_PROFILE_URL, HOME_URL, LOGIN_URL, REGISTER_URL, BUSCAR_DOCTOR_URL, AGENDAR_URL, CHAT_URL, ABOUT_US_URL, CONTACT_US_URL, PROFILE_URL} from './constants/urls';
import './index.css';
import {AgendarPage} from './pages/AgendarPage/AgendarPage';
import AboutUs from './pages/AboutUsPage/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import Profile from './pages/UserProfile/Profile'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<App />}/>
          <Route path={LOGIN_URL} element={<Login />}/>
          <Route path={REGISTER_URL} element={<Register />}/>
          <Route path= {BUSCAR_DOCTOR_URL} element={
            <PrivateRoute>
              <SearchDoctor/>
            </PrivateRoute>
          }/>
          <Route path={DOCTOR_PROFILE_URL} element={
            <PrivateRoute>
              <DoctorProfile/>
            </PrivateRoute>
          }/>
          <Route path={CHAT_URL} element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }/>
          <Route path = {AGENDAR_URL} element={
            <PrivateRoute>
              <AgendarPage/>
            </PrivateRoute>
          }/>
          <Route path = {ABOUT_US_URL} element={<AboutUs/>}/>
          <Route path = {CONTACT_US_URL} element={<ContactUs/>}/>
          <Route path = {PROFILE_URL} element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
//<Route path = {CHAT_URL} element={<Chats /> }/>