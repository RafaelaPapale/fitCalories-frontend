import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}