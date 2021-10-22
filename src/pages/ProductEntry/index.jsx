import axios from "axios";
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './productEntry.css';

const options = {
    method: 'POST',
    url: 'http://localhost:5000/productMaster/nuevo',
    headers: { 'Content-Type': 'application/json' },
    data: { description: 'macbook air rojo', value: 3, state: 'Disponible' }
};

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
    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;

        })
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/productMaster/nuevo',
            headers: { 'Content-Type': 'application/json' },
            data: { description: nuevoProducto.description, value: nuevoProducto.value, state: nuevoProducto.state }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto creado exitosamente");
            console.log(nuevoProducto);
        }).catch(function (error) {
            console.error(error);
            toast.error("Error creando producto");
        });
    };


    return (

        <div >
            <h1>Registro de productos</h1>
            <form ref={form} onSubmit={submitForm}>

                <div className="group-n">
                    <input name="description" type="text" required />
                    <span className="highlight"></span>
                    <span className="bar" ></span>
                    <p>Descripción del producto</p>
                </div>
                <div className="group-n">
                    <input name="value" type="number" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <p>Valor unitario</p>
                </div>
                <div href="estado " className="checkbox" >
                    <select name="state" required>
                        <option disabled>Seleccione disponibilidad</option>
                        <option >Disponible</option>
                        <option >No Disponible</option>
                    </select>
                </div>
                <div className="login-submit">
                    <input className="checkbox-bottom" id="checkbox-bottom" type="submit" value="Guardar producto" />
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                    />
                </div>
                <div className="others">
                    <div>
                        <Link to="./productMaster">Ir a interfaz de productos</Link>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default ProductEntry

