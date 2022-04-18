import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Usuario from '../pages/Usuario';
import CreateUser from '../pages/CreateUser';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/create" element={<CreateUser />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/usuario" element={<Usuario />} />
    </Routes>

    
  );
}