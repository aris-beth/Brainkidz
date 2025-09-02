import React from 'react';
import Login from './components/login.jsx';
import { Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path={"/login"} component={Login} />
          <Route path={"/biblioteca"} component={Biblioteca} />
        </Routes>
    </Router>
  );
}

export default App;

