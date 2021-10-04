import React from 'react';
import './productEntry.css';
import { Link } from 'react-router-dom';

const ProductEntry = () => {
    return (
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
                        <h1>Registro de producto</h1>
                        <form>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Identificador del producto</p>
                            </div>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar" ></span>
                                <p>Descripción del producto</p>
                            </div>
                            <div className="group">
                                <input type="number" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Valor unitario</p>
                            </div>
                            <div className="checkbox" required>
                                {/*<p>Seleccione estado</p>*/}
                                <select name="estado" multiple>
                                    <option value="disponible" >Disponible</option>
                                    <option value="disponible">No Disponible</option>
                                </select>


                            </div>

                            <div className="login-submit">
                                <input type="submit" value="Guardar producto" />
                            </div>

                            <div className="others">
                                <div>
                                    <Link to="/">Ir a Interfaz Maestra</Link>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEntry
