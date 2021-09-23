import React from "react";
import { Link } from "react-router-dom";
import './register.css';

const Register = () => (
    <div className="register-screen">
        <div className="register-container">
            <div className="register-left">
                <div className="register-title">
                    <h1>MISIONTIC</h1>
                    <h2>Hello World Team</h2>
                </div>
            </div>
            <div className="register-right">
                <div className="register-form">
                    <h1>Crear cuenta</h1>
                    <form>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Usuario</label>
                        </div>

                        <div className="group">
                            <input type="email" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Correo</label>
                        </div>

                        <div className="group">
                            <input type="password" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Contraseña</label>
                        </div>

                        <div className="group">
                            <input type="password" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Confirmar contraseña</label>
                        </div>

                        <div className="register-submit">
                            <input type="submit" value="Entrar" />
                        </div>

                        <div className="others-text">
                            <Link className="link-text" to="/entrar">Iniciar sesion</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Register;


/*
    <div>

    </div>
*/