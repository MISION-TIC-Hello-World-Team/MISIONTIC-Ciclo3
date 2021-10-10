import React from 'react';
import './productEntry.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  identificadorProducto = (e) => {console.log(e.target.value)};
const  descripcionProducto = (e) => {console.log(e.target.value)};
const  valorUnitario = (e) => {console.log(e.target.value)};
const  estado = (e) => {console.log(e.target.value)};



const GuardarProducto = () => {
    const toastExito = () => toast.success("Producto guardado exitosamente")
    return (
        <div className="login-submit">
            <input onClick={toastExito} type="submit" value="Guardar producto" />
            <ToastContainer
                position="bottom-center"
                autoClose={false}
            
            />
        </div>
    )
}
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
                        <h1>Registro de productos</h1>
                        <form>
                            <div className="group-n">
                                <input onChange={identificadorProducto} type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Identificador del producto</p>
                            </div>
                            <div className="group-n">
                                <input onChange={descripcionProducto} type="text" required />
                                <span className="highlight"></span>
                                <span className="bar" ></span>
                                <p>Descripción del producto</p>
                            </div>
                            <div className="group-n">
                                <input onChange={valorUnitario} type="number" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Valor unitario</p>
                            </div>
                            <div className="checkbox" >
                                <select onChange={estado} name="estado" multiple required>
                                    <option value="disponible" >Disponible</option>
                                    <option value="No disponible">No Disponible</option>
                                </select>
                            </div>
                            <div >
                                <GuardarProducto />
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
export {ProductEntry, identificadorProducto,descripcionProducto,valorUnitario,estado}
