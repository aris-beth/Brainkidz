import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      {/* Logo y menú superior */}
      <header className="login-header">
        <img src="/public/logo.png" alt="BrainKidz logo" className="logo" />
        <nav>
          <a href="#">Padres</a>
          <a href="#">Ayuda</a>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="login-main">
        <div className="login-left">
          <img src="/public/logo2.png" alt="Mascota" className="mascota" />
        </div>

        <div className="login-right">
          <h3>Ingresa a tu cuenta</h3>
          <input type="text" placeholder="usuario" className="input" />
          <input type="password" placeholder="contraseña" className="input" />

          <div className="actions">
            <span>
              ¿Eres nuevooo? <a href="#">Crear cuenta</a>
            </span>
            <button className="btn-enter" >Entrar</button>
          </div>

          <a href="#" className="forgot">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </main>
    </div>
  );
}



