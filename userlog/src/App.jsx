import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/subpages/Login'
import Signup from './pages/subpages/Signup'
import Dashboard from './pages/Dashboard'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'typeface-inter' 
import LoginSingup from './pages/LoginSingup'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/subpages/Profile'
import Category from './pages/subpages/Category'
import VCard from './pages/VCard'
import Template1 from './components/Templates/Template1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<LoginSingup />} path='/' >
        <Route element={<Login />} path='/login' />
        <Route element={<Signup />} path="/signup" />
        </Route>
        <Route element={<Dashboard />} path='dashboard' >
          <Route element={<Profile />} path='profile' />
          <Route element={<Category />} path='category' />
          <Route element={<VCard />} path='vcard'/>
        </Route>
        <Route element={<Template1 />} path="/template1" >

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
