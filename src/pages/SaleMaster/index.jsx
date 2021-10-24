import axios from "axios";
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './spr.css';
export const SaleMaster = () => {
    const [sales, setSales] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    useEffect(()=>{
        const obtenerSales = async () => {
            const options = {
                method: 'GET',
                url: 'http://localhost:5050/saleMaster',
                headers: { 'Content-Type': 'application/json' }
            };
            await axios.request(options).then(function (response) {
                setSales(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        if (ejecutarConsulta){
            obtenerSales();
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
                        <TablaProductos listaSales={sales} setEjecutarConsulta={setEjecutarConsulta} />
                    </div>
                </div>
            </div>
        </div>
    )
}
const RowsTable = ({ sales, setEjecutarConsulta}) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        description: sales.description,
        value: sales.value,
        state: sales.state
    });
    const actualizarVenta = async () => {
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5050/saleMaster/editar',
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevaVenta, id: sales._id }
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Venta editada exitosamente");
            setEdit(!edit);
            setEjecutarConsulta(true);
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al editar");
        });
    };
    const eliminarVenta  = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5050/saleMaster/eliminar',
            headers: { 'Content-Type': 'application/json' },
            data: { id: sales._id }
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            setEjecutarConsulta(true);
            toast.success("Venta eliminada con exito");
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al eliminar la venta");
        });
    };
    return (
        < tr  >
            {edit ? (
                <>
                    <td>{sales._id.substr(-4)}</td>
                    <td>
                        <input type="text" value={infoNuevaVenta.date} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, date: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.value} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, value: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.products} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, products: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.employee} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, employee: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.client} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, client: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevaVenta.clientID} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, clientID: e.target.value })} />
                    </td>
                </>
            ) : (
                <>
                    <td>{sales._id.substr(-4)}</td>
                    <td>{sales.date}</td>
                    <td>{sales.value}</td>
                    <td>{sales.products}</td>
                    <td>{sales.employee}</td>
                    <td>{sales.client}</td>
                    <td>{sales.clientID}</td>
                </>
            )}
            <td className="actions">
                {edit ? (
                    <>
                        <i onClick={() => actualizarVenta()} className="fas fa-check actions" />
                    </>
                ) : (
                    <>
                        <i onClick={() => setEdit(!edit)} className="fas fa-edit actions" />
                        <i onClick={() => eliminarVenta()} className="fas fa-trash-alt actions" />
                        <ToastContainer position="bottom-center" autoClose={5000} />
                    </>
                )}
            </td>
        </tr >
    )
}
const TablaProductos = ({ listaSales, setEjecutarConsulta }) => { 
    return (
        <div>
            <h2 className="title"> Tabla de ventas</h2>
            <div>
                <div className="busqueda">
                    <input  placeholder="Busqueda" className="busqueda-in"></input>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table">
                            <th  >ID</th>
                            <th >Fecha</th>
                            <th >Valor Unitario</th>
                            <th >Productos vendidos</th>
                            <th >Vendedor</th>
                            <th >Cliente</th>
                            <th >ID Cliente</th>
                            <th >Editar / Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaSales.map((sales) => {
                            return (
                                <RowsTable key={nanoid()} sales={sales} setEjecutarConsulta={setEjecutarConsulta} />
                            );
                        })}
                    </tbody>
                </table>
                <div className="foot">
                    <div>
                        <Link to="./saleEntry">Ir a interfaz de registro de venta</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SaleMaster;