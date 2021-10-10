import React, { useEffect, useState } from 'react';
import './productMaster.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { identificadorProducto, valorUnitario, descripcionProducto, estado } from '../ProductEntry';

const datos = [
    {
        id: "12",
        description: "macbook air rojo",
        value: 3000,
        state: "Disponible"
    },
    {
        id: "45",
        description: "macbook air azul",
        value: 2000,
        state: "Disponible"
    },
    {
        id: "67",
        description: "macbook air verde",
        value: 1000,
        state: "Disponible"
    },
    {
        id: "89",
        description: "macbook air negro",
        value: 5000,
        state: "No disponible"
    },
    {
        id: "01",
        description: "macbook air blaco",
        value: 6000,
        state: "No disponible"
    },
]

const ProductMaster = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        // obtener datos
        setDatos(datos)
    }, []);



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
                        <TablaProductos />
                    </div>
                </div>
            </div>
        </div>
    )
}

const TablaProductos = (datos) => {
    useEffect(()=>{
        console.log(datos);
    },[datos]);
    return (
        <table >
            <thead>
                <h1 className=""> Tabla de productos</h1>
                <tr className="table">
                    <th className="table cell" >Identificador</th>
                    <th className="table cell">Descripción</th>
                    <th className="table cell ">Valor Unitario</th>
                    <th className="table cell">Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>
                        macbook air blaco
                    </td>
                    <td>
                        5000
                    </td>
                    <td>
                        No disponible
                    </td>
                </tr>
            </tbody>
        </table>)
}
export default ProductMaster