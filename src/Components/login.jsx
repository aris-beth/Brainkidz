// login.jsx
import React from "react";
import "./login.css";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode || "login" // valor por defecto si no recibe props
    };
  } x

  toggleMode() {
    const newMode = this.state.mode === "login" ? "signup" : "login";
    this.setState({ mode: newMode });
  }

  render() {
    return (
      <div>
        <div
          className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`}
        ></div>

        <section className={`form-block form-block--is-${this.state.mode}`}>
          <header className="form-block__header">
            <h1>
              {this.state.mode === "login" ? "¡Hola! Ingresa a tu cuenta" : "Registrate"}
            </h1>

            <div className="form-block__toggle-block">
              <span>
                {this.state.mode === "login" ? "¿No" : "¿Ya"} tienes una cuenta? Click aquí &#8594;
              </span>
              <input
                id="form-toggler"
                type="checkbox"
                onClick={this.toggleMode.bind(this)}
              />
              <label htmlFor="form-toggler"></label>
            </div>
          </header>

          <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
        </section>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-block__input-wrapper">
          <div className="form-group form-group--login">
            <Input
              type="text"
              id="username"
              label="usuario"
              disabled={this.props.mode === "signup"}
            />
            <Input
              type="password"
              id="password"
              label="contraseña"
              disabled={this.props.mode === "signup"}
            />
          </div>

          <div className="form-group form-group--signup">
            <Input
              type="text"
              id="fullname"
              label="1. Escribe tu nombre"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="text"
              id="user"
              label="2. Crea tu usuario"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="password"
              id="createpassword"
              label="3. Crea tu contraseña"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="password"
              id="repeatpassword"
              label="4. Repite tu contraseña"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="mail"
              id="email"
              label="5. Ingresa el correo de tu tutor"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="text"
              id="tutname"
              label="6. Ingresa el nombre de tu tutor"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="date"
              id="datebirth"
              label="7. Ingresa tu fecha de nacimiento"
              disabled={this.props.mode === "login"}
            />
          </div>
        </div>

        <button
          className="button button--primary full-width"
          type="submit"
        >
          {this.props.mode === "login" ? "Ingresar" : "Registrarse"}
        </button>
      </form>
    );
  }
}

const Input = ({ id, type, label, disabled }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
  />
);

// Componente principal que usarás en tu App
const Login = () => {
  return (
    <div className="app app--is-login">
      <LoginComponent
        mode="login"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
      />
    </div>
  );
};

export default Login;



