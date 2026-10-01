import { useState } from "react";
'import "./Inicio-sesion.css";'

function InicioSesion() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  return (
    <main className="container">
      <div className="login-card">

        {/* PANEL IZQUIERDO */}
        <section className="brand-panel">
          <div className="brand-top">
            <span>Luxury collection</span>
            <span>2026</span>
          </div>

          <div className="brand-content">
            <div className="title-wrap">
              <i className="fa-solid fa-asterisk star"></i>

              <h1>Lencería</h1>

              <svg
                className="orbit"
                viewBox="0 0 300 120"
                aria-hidden="true"
              >
                <ellipse cx="150" cy="60" rx="145" ry="52" />
              </svg>
            </div>

            <p>Elegancia que comienza contigo.</p>
          </div>

          <div className="brand-bottom">
            <span>Comodidad</span>
            <span>Elegancia</span>
          </div>
        </section>

        {/* PANEL DERECHO */}
        <section className="form-panel">

          <div
            className={`forms ${mostrarRegistro ? "show-register" : ""}`}
          >

            {/* FORM LOGIN */}
            <div className="form login-form">
              <form
                className="card"
                autoComplete="off"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="card-header">
                  <h2 className="card-title">
                    Iniciar sesión
                  </h2>

                  <p className="card-description">
                    Accede a tu cuenta para continuar.
                  </p>
                </div>

                <div className="card-content">

                  {/* CORREO */}
                  <div className="input-group">
                    <label htmlFor="login-email">
                      Correo electrónico
                    </label>

                    <div className="input-box">
                      <i className="fa-regular fa-envelope"></i>

                      <input
                        id="login-email"
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  {/* CONTRASEÑA */}
                  <div className="input-group">
                    <div className="password-title">
                      <label htmlFor="login-password">
                        Contraseña
                      </label>

                      <a href="#">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>

                    <div className="input-box">
                      <i className="fa-solid fa-lock"></i>

                      <input
                        id="login-password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        required
                      />
                    </div>
                  </div>

                  {/* RECORDAR */}
                  <label className="remember">
                    <input type="checkbox" />
                    <span>Recordarme</span>
                  </label>

                </div>

                <div className="card-footer">

                  <button
                    type="submit"
                    className="button"
                  >
                    Iniciar sesión
                  </button>

                  <button
                    type="button"
                    className="button button-outline"
                    onClick={() => setMostrarRegistro(true)}
                  >
                    Crear cuenta nueva
                  </button>

                </div>
              </form>
            </div>

            {/* FORM REGISTRO */}
            <div className="form register-form">
              <form
                className="card"
                autoComplete="off"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="card-header">
                  <h2 className="card-title">
                    Crear cuenta
                  </h2>

                  <p className="card-description">
                    Crea tu cuenta y descubre nuestra colección.
                  </p>
                </div>

                <div className="card-content">

                  {/* NOMBRE */}
                  <div className="input-group">
                    <label htmlFor="reg-nombre">
                      Nombre completo
                    </label>

                    <div className="input-box">
                      <i className="fa-regular fa-user"></i>

                      <input
                        id="reg-nombre"
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  {/* CORREO */}
                  <div className="input-group">
                    <label htmlFor="reg-email">
                      Correo electrónico
                    </label>

                    <div className="input-box">
                      <i className="fa-regular fa-envelope"></i>

                      <input
                        id="reg-email"
                        type="email"
                        name="email-registro"
                        placeholder="tu@email.com"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  {/* CONTRASEÑA */}
                  <div className="input-group">
                    <label htmlFor="reg-password">
                      Crear contraseña
                    </label>

                    <div className="input-box">
                      <i className="fa-solid fa-lock"></i>

                      <input
                        id="reg-password"
                        type="password"
                        name="password-registro"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        required
                      />
                    </div>
                  </div>

                </div>

                <div className="card-footer">

                  <button
                    type="submit"
                    className="button"
                  >
                    Crear cuenta
                  </button>

                  <button
                    type="button"
                    className="button button-outline"
                    onClick={() => setMostrarRegistro(false)}
                  >
                    Ya tengo cuenta
                  </button>

                </div>
              </form>
            </div>

          </div>

          <footer>
            © 2026 Lencería · Luxury Collection
          </footer>

        </section>
      </div>
    </main>
  );
}

export default InicioSesion;
