import Dashboard from './Component/Dashboard';
import { Route, Routes } from 'react-router-dom';
import MasterLoginForm from './Component/MasterLoginForm';
import Admin from './Component/Admin';
import StoreSignup from './Component/StoreSignup';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import { useLocation } from 'react-router-dom';
import StoreSignupDashbord from './Component/StoreSignupDashbord';
import { useEffect, useState } from 'react';
function App() {
  // const location=useLocation()
  // const[showHeader, setShowHeader]=useState(true)
  // const nonheaderRoute=['/']
  // useEffect(()=>{
  //   const s=nonheaderRoute.indexOf(location.pathname)===-1
  //   console.log('s', s);
  //   setShowHeader(s)
  // },[location])
 
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/StoreSignup' element={<StoreSignup/>}/>
        <Route path='/storedashboard' element={<StoreSignupDashbord/>}/>
      </Routes>
    </div>
  );
}

export default App;
