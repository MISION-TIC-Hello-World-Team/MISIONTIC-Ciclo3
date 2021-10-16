import './productEntry.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { ProductMaster } from '..';


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
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
const Form = () => {
    const [productID, setProductID] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [unitValue, setUnitValue] = useState("");
    const [estado, setStatus] = useState("");
    const toastExito = () => toast.success("Producto guardado exitosamente")
    const sendBackend = () => {
        console.log(productID, productDesc, unitValue, estado)
    }
    return (

        <div >
            <h1>Registro de productos</h1>
            <form>
                <div className="group-n">
                    <input value={productID} onChange={(e) => { setProductID(e.target.value) }} type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <p>Identificador del producto</p>
                </div>
                <div className="group-n">
                    <input value={productDesc} onChange={(e) => { setProductDesc(e.target.value) }} type="text" required />
                    <span className="highlight"></span>
                    <span className="bar" ></span>
                    <p>Descripción del producto</p>
                </div>
                <div className="group-n">
                    <input value={unitValue} onChange={(e) => { setUnitValue(e.target.value) }} type="number" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <p>Valor unitario</p>
                </div>
                <div href="estado "className="checkbox" >
                    <select value={estado} onChange={(e) => { setStatus(e.target.value) }} name="estado"  required>
                        <option >Disponible</option>
                        <option >No Disponible</option>
                    </select>
                </div>
                <div className="login-submit">
                    <input onClick={toastExito} onClick={()=>{sendBackend()}}className="checkbox-bottom" id="checkbox-bottom" type="button" value="Guardar producto" />
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                    />
                </div>
                <div className="others">
                    <div>
                        <Link to="./productMaster">Ir a Interfaz Maestra</Link>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default ProductEntry
