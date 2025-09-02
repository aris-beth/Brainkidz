import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import Biblioteca from "./components/biblioteca.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal muestra Login */}
        <Route path="/" element={<Login />} />
        {/* Ruta para la biblioteca */}
        <Route path="/biblioteca" element={<Biblioteca />} />
      </Routes>
    </Router>
  );
}

export default App;
