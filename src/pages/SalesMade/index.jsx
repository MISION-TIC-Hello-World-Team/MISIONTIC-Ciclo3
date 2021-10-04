import React from "react";
import './salesMade.css';
import { Link } from 'react-router-dom';

const SalesMade = () => (
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
                    <h1>Maestro de ventas</h1>
                    <form>
                        <table class="default">
                            <tr>
                                <th>ID venta</th>
                                <th>Fecha venta</th>
                                <th>ID vendedor</th>
                                <th>Tipo ID cliente</th>
                                <th>Número ID cliente</th>
                                <th>Nombre cliente</th>
                                <th>ID producto</th>
                                <th>Precio unitario</th>
                                <th>Cantidad</th>
                                <th>Total venta</th>
                                <th>Estado</th>
                            </tr>
                        </table>
                        <div className="others-text">
                            <div>
                                <Link to="/entrar">Registrar venta</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default SalesMade;