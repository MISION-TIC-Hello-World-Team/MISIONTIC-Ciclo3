import React from "react";
import './login.css';
import { Link } from 'react-router-dom';

const SalesRecord = () => (
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
                    <h1>Registro de venta</h1>
                    <form>
                        <div className="group">
                            <input type="number" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>ID venta</label>
                        </div>

                        <div className="group">
                            <input type="date" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Fecha venta</label>
                        </div>

                        <div className="group">
                            <input type="number" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>ID vendedor</label>
                        </div>

                        <div className="group">
                            <label class="options" for="Tipo de documento">Tipo de documento: </label>
                            <select id ="Tipo de documento" class="select">
                                <option>CC</option>
                                <option>NIT</option>
                                <option>CE</option>
                                <option>PAS</option>
                            </select>
                        </div>

                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Número del documento</label>
                        </div>

                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Nombre cliente</label>
                        </div>

                        <div className="group">
                            <label class="options" for="totalVenta">Total de la venta </label>
                        </div>

                        <div className="others-text">
                            <div>
                                <Link to="/registro">Agregar producto(s) a la venta</Link>
                            </div>
                        </div>

                        <div className="login-submit">
                            <input type="submit" value="Registrar venta" />
                        </div>

                        <div className="others-text">
                            <div>
                                <Link to="/resumen">Maestro de ventas</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default SalesRecord;