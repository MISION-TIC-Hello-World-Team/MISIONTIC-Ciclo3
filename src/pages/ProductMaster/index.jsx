import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './productMaster.css';
import { nanoid } from 'nanoid';



const ProductosBackEnd = [
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


export const ProductMaster = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setProductos(ProductosBackEnd);
    }, []) // vacio así solo carga por una vez cuando load la pag
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

                        <TablaProductos listaProductos={productos} />

                    </div>
                </div>
            </div>
        </div>
    )
}
const TablaProductos = ({ listaProductos }) => { //listaProductos es un prop

    return (
        <div>
            <h2 className="title"> Tabla de productos</h2>
            <div>
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
                                    <td>{productos.id}</td>
                                    <td>{productos.description}</td>
                                    <td>{productos.value}</td>
                                    <td>{productos.state}</td>
                                    <td className="actions">
                                        <i className="fas fa-edit actions"/>
                                        <i className="fas fa-trash-alt actions"/>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductMaster