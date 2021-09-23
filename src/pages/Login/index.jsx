import React from "react";
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => (
    <div className="login-screen">
        <div className="login-container">
            <div className="login-left">
                <div className="login-title">
                    <h1>MISIONTIC</h1>
                    <h2>Hello World Team</h2>
                </div>
            </div>
            <div className="login-right">
                <div className="login-form">
                    <h1>Gestión de usuario</h1>
                    <form>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Ingrese su nombre</label>
                        </div>

                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Ingrese su ID</label>
                        </div>
                            
                        <div className="group">
                            <label class="options" for="roles">Elija un rol: </label>
                            <select id ="roles" class="select">
                                <option>Vendedor</option>
                                <option>Administrador</option>
                                <option>Ejecutivo</option>
                                <option>Operario</option>
                                <option>Director</option>
                                <option>Gerente comercial</option>
                            </select>
                        </div>

                        <div className="login-submit">
                            <input type="submit" value="Entrar" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Login;
