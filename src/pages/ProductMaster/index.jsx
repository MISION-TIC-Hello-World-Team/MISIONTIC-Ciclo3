import axios from "axios";
import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './productMaster.css';



export const ProductMaster = () => {

    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(()=>{
        const obtenerProductos = async () => {

            const options = {
                method: 'GET',
                url: 'http://localhost:5000/productMaster',
                headers: { 'Content-Type': 'application/json' }
            };

            await axios.request(options).then(function (response) {
                setProductos(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        if (ejecutarConsulta){
            obtenerProductos();
            setEjecutarConsulta(false);

        }
    },[ejecutarConsulta]);




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

                        <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} />

                    </div>
                </div>
            </div>
        </div>
    )
}

const RowsTable = ({ productos, setEjecutarConsulta}) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
        description: productos.description,
        value: productos.value,
        state: productos.state
    });

    const actualizarProducto = async () => {
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/productMaster/editar',
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoProducto, id: productos._id }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto editado exitosamente");
            setEdit(!edit);
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al editar");
        });
    };

    const elimintarProducto  = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/productMaster/eliminar',
            headers: { 'Content-Type': 'application/json' },
            data: { id: productos._id }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            setEjecutarConsulta(true);
            toast.success("Producto eliminado con exito");
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al eliminar el producto");
        });
    };
    return (
        < tr  >
            {edit ? (
                <>
                    <td>{productos._id.substr(-4)}</td>
                    <td>
                        <input type="text" value={infoNuevoProducto.description} onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, description: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevoProducto.value} onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, value: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevoProducto.state} onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, state: e.target.value })} />
                    </td>
                </>
            ) : (
                <>
                    <td>{productos._id.substr(-4)}</td>
                    <td>{productos.description}</td>
                    <td>{productos.value}</td>
                    <td>{productos.state}</td>
                </>
            )}
            <td className="actions">
                {edit ? (
                    <>
                        <i onClick={() => actualizarProducto()} className="fas fa-check actions" />
                    </>
                ) : (
                    <>
                        <i onClick={() => setEdit(!edit)} className="fas fa-edit actions" />
                        <i onClick={() => elimintarProducto()} className="fas fa-trash-alt actions" />
                        <ToastContainer position="bottom-center" autoClose={5000} />
                    </>
                )}
            </td>

        </tr >
    )
}

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => { 
    return (
        <div>

            <h2 className="title"> Tabla de productos</h2>
            <div>
                <div className="busqueda">
                    <input  placeholder="Busqueda" className="busqueda-in"></input>
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
                                <RowsTable key={nanoid()} productos={productos} setEjecutarConsulta={setEjecutarConsulta} />
                            );
                        })}
                    </tbody>

                </table>
                <div className="foot">
                    <div>
                        <Link to="./productEntry">Ir a interfaz de creación</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductMaster