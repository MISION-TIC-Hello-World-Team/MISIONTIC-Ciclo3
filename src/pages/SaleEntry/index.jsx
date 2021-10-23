import axios from "axios";
import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './saleEntry.css';
const SaleEntry = () => {
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
                        <TablaPrincipal />
                    </div>
                </div>
            </div>
        </div>
    )
}
const TablaPrincipal = () => {
    const form = useRef(null);
    const submitVentas = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        })
        const options = {
            method: 'POST',
            url: 'http://localhost:5050/saleMaster/nuevo',
            headers: { 'Content-Type': 'application/json' },
            data: {
                date: nuevaVenta.date,
                value: nuevaVenta.value,
                product: nuevaVenta.product,
                vendedor: nuevaVenta.vendedor,
                clientID: nuevaVenta.clientID
              }
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto creado exitosamente");
            console.log(nuevaVenta);
        }).catch(function (error) {
            console.error(error);
            toast.error("Error creando producto");
        });
    };
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    useEffect(() => {
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
        if (ejecutarConsulta) {
            obtenerProductos();
            setEjecutarConsulta(false);
        }
    }, []);
    const [empleados, setEmpleados] = useState([]);
    useEffect(() => {
        const obtenerEmpleados = async () => {
            const options = {
                method: 'GET',
                //url: 'http://localhost:5000/employeeMaster',
                headers: { 'Content-Type': 'application/json' }
            };
            await axios.request(options).then(function (response) {
                setEmpleados(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        if (ejecutarConsulta) {
            obtenerEmpleados();
            setEjecutarConsulta(false);
        }
    }, []);
    return (
        <div >
            <h1>Registro de productos</h1>
            <form ref={form} onSubmit={submitVentas}>
                <div className="group-n">
                    <input name="description" type="date" required />
                    <span className="highlight"></span>
                    <span className="bar" ></span>
                    <p>Fecha de la venta</p>
                </div>
                <div className="group-n">
                    <input name="value" type="number" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <p>Valor unitario</p>
                </div>
                Seleccione productos vendidos
                * Use la tecla control para varios
                <div className="checkbox" >
                    <select name="productos" multiple id="dropdown" >
                        {productos.map((v) => {
                            return <option onClick={() => console.log(v.value)} key={nanoid()}>{v.description}{" - "}{v.value}{" - "}{v.state}</option>
                        })}
                    </select>
                </div>
                Seleccione vendedor
                <div className="checkbox" >
                    <select name="empleados" id="dropdown" >
                        {empleados.map((v) => {
                            return <option onClick={() => console.log(v.value)} key={nanoid()}>{v.description}{" - "}{v.value}{" - "}{v.state}</option>
                        })}
                    </select>
                </div>
                <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    Nombre del cliente
                </div>
                <div className="group">
                    <input type="number" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    Documento de identificación del cliente
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
                        <Link to="./saleMaster">Ir a la interfaz de ventas</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SaleEntry;
