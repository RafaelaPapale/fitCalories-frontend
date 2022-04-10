import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/Login" element={<Login />} />
    </Routes>

    
  );
}