import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route 
        path='/dashboard' 
        element={
        <Protected>
          <Dashboard />
        </Protected> 
        } 
      />
      </Routes>
      </AuthContextProvider>
    </div>
  );  
}

export default App;