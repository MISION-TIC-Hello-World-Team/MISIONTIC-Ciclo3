import './productEntry.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { ProductMaster } from '..';

const GuardarProducto = () => {
    const toastExito = () => toast.success("Producto guardado exitosamente")
    return (
        <div className="login-submit">
            <input onClick={toastExito} className="checkbox-bottom" id="checkbox-bottom"type="button" value="Guardar producto" />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
            />
        </div>
    )
}
const ProductEntry = () => {
    const [productID,setProductID]=useState("");
    const [productDesc,setProductDesc]=useState("");
    const [unitValue,setUnitValue]=useState("");
    const [status,setStatus]=useState("");
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
                                <input onChange={(e)=> {setProductID(e.target.value)}} type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Identificador del producto</p>
                            </div>
                            <div className="group-n">
                                <input onChange={(e)=> {setProductDesc(e.target.value)}} type="text" required />
                                <span className="highlight"></span>
                                <span className="bar" ></span>
                                <p>Descripción del producto</p>
                            </div>
                            <div className="group-n">
                                <input onChange={(e)=> {setUnitValue(e.target.value)}} type="number" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Valor unitario</p>
                            </div>
                            <div className="checkbox" >
                                <select onChange={(e)=> {setStatus(e.target.value)}} name="estado" multiple required>
                                    <option value="disponible" >Disponible</option>
                                    <option value="No disponible">No Disponible</option>
                                </select>
                            </div>
                            <div >
                                <GuardarProducto />
                            </div>
                            <div className="others">
                                <div>
                                    <Link to="./productMaster">Ir a Interfaz Maestra</Link>
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
