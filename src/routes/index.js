import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Usuario from '../pages/Usuario';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/usuario" element={<Usuario />} />
    </Routes>

    
  );
}