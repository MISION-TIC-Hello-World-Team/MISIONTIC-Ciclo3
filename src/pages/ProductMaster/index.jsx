import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './productMaster.css';
import { nanoid } from 'nanoid';
import { obtenerProductos } from '../utils';
import axios from "axios";
import { Link } from 'react-router-dom';



export const ProductMaster = (listaProductos) => {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://localhost:5000/productMaster',
            headers: { 'Content-Type': 'application/json' }
        };

        axios.request(options).then(function (response) {
            setProductos(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        setProductos([]);
    }, []) // vacio así solo carga por una vez cuando load la pag
    useEffect(() => {
        console.log(busqueda);
    }, [busqueda]);



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

                        <TablaProductos listaProductos={productos} setBusquedax={setBusqueda} />

                    </div>
                </div>
            </div>
        </div>
    )
}
const TablaProductos = ({ listaProductos, setBusquedax }) => { //listaProductos es un prop

    return (
        <div>

            <h2 className="title"> Tabla de productos</h2>
            <div>
                <div className="busqueda">
                    <input onChange={(e) => setBusquedax(e.target.value)} placeholder="Busqueda" className="busqueda-in"></input>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table">
                            <th  >Identificador</th>
                            <th >Descripción</th>
                            <th >Valor Unitario</th>
                            <th >Estado</th>
                            <th >Editar / Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductos.map((productos) => {
                            return (
                                <tr >
                                    <td>{productos._id.substr(-4)}</td>
                                    <td>{productos.description}</td>
                                    <td>{productos.value}</td>
                                    <td>{productos.state}</td>
                                    <td className="actions">
                                        <i className="fas fa-edit actions" />
                                        <i className="fas fa-trash-alt actions" />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    
                </table>
                <div className="foot">
                    <div>
                        <Link to="./productEntry">Ir a Interfaz de Creación</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductMaster