import './productEntry.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState, useContext, useRef, createContext } from 'react';
import { ProductContext } from '../ProductMaster';

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
                        <Formulario />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Formulario = () => {
    const form = useRef(null);
    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
            console.log(nuevoProducto)
        })

    };

    const toastExito = () => toast.success("Producto guardado exitosamente");
    /*useEffect(() => {
        setProductos([ProductosBackEnd])
    }, []) // vacio así solo carga por una vez cuando load la pag
    */
    const sendBackend = () => {

        //console.log(productID, productDesc, unitValue, estado)
    }
    return (

        <div >
            <h1>Registro de productos</h1>
            <form ref={form} onSubmit={submitForm}>
                <div className="group-n">
                    <input name="productID" type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <p>Identificador del producto</p>
                </div>
                <div className="group-n">
                    <input name="productDesc" type="text" required />
                    <span className="highlight"></span>
                    <span className="bar" ></span>
                    <p>Descripción del producto</p>
                </div>
                <div className="group-n">
                    <input name="unitValue" type="number" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <p>Valor unitario</p>
                </div>
                <div href="estado " className="checkbox" >
                    <select name="estado " required>
                        <option value=""disabled>Seleccione disponibilidad</option>
                        <option >Disponible</option>
                        <option >No Disponible</option>
                    </select>
                </div>
                <div onClick={toastExito} className="login-submit">
                    <input onClick={() => { sendBackend() }} className="checkbox-bottom" id="checkbox-bottom" type="submit" value="Guardar producto" />
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
