import React from "react";
import { Link } from "react-router-dom";
import './register.css';

const SaleProductsRegistration = () => (
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
                    <h1>Registro productos de la venta</h1>
                    <form>
                        <div className="group">
                            <input type="number" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>ID producto</label>
                        </div>

                        <div className="group">
                        <label class="options" for="precioUnitario"> Precio unitario </label>
                        </div>

                        <div className="group">
                            <input type="number" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Cantidad</label>
                        </div>

                        <div className="register-submit">
                            <input type="submit" value="Registrar producto" />
                        </div>

                        <div className="others-text">
                            <Link className="link-text-right" to="/entrar">Regresar al registro de la venta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default SaleProductsRegistration;