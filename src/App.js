import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Achieve from './pages/achieve';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Form from './pages/Form';
import Edit from './pages/personal';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/achievements' element={<Achieve />} />
        <Route path='/About' element={<About />} />
        <Route path='/Form' element={<Form />} />
        <Route path='/edit' element={<Edit />} />
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