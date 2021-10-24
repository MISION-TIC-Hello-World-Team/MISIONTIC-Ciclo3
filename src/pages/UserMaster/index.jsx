import axios from "axios";
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './userMaster.css';

export const UserMaster = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    useEffect(()=>{
        const obtenerUsuarios = async () => {
            const options = {
                method: 'GET',
                url: 'http://localhost:5001/userMaster',
                headers: { 'Content-Type': 'application/json' }
            };
            await axios.request(options).then(function (response) {
                setUsuarios(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        if (ejecutarConsulta){
            obtenerUsuarios();
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
                        <TablaDeUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
                    </div>
                </div>
            </div>
        </div>
    )
}
const RowsTable = ({ usuarios, setEjecutarConsulta}) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevoUsuario, setinfoNuevoUsuario] = useState({
        user: usuarios.user,
        emaillue: usuarios.email,
        state: usuarios.state
    });
    const actualizarProducto = async () => {
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5001/userMaster/editar',
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoUsuario, id: usuarios._id }
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Usuario editado exitosamente");
            setEdit(!edit);
            setEjecutarConsulta(true);
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al editar");
        });
    };
    const elimintarProducto  = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5001/userMaster/eliminar',
            headers: { 'Content-Type': 'application/json' },
            data: { id: usuarios._id }
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            setEjecutarConsulta(true);
            toast.success("Usuario eliminado con exito");
        }).catch(function (error) {
            console.error(error);
            toast.error("Error al eliminar el usuario");
        });
    };
    return (
        < tr  >
            {edit ? (
                <>
                    <td>{usuarios._id.substr(-4)}</td>
                    <td>
                        <input type="text" value={infoNuevoUsuario.user} onChange={(e) => setinfoNuevoUsuario({ ...infoNuevoUsuario, user: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevoUsuario.email} onChange={(e) => setinfoNuevoUsuario({ ...infoNuevoUsuario, email: e.target.value })} />
                    </td>
                    <td>
                        <input type="text" value={infoNuevoUsuario.state} onChange={(e) => setinfoNuevoUsuario({ ...infoNuevoUsuario, state: e.target.value })} />
                    </td>
                </>
            ) : (
                <>
                    <td>{usuarios._id.substr(-4)}</td>
                    <td>{usuarios.user}</td>
                    <td>{usuarios.email}</td>
                    <td >{usuarios.state}</td>
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
const TablaDeUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => { 
    return (
        <div>
            <h2 className="title"> Tabla de usuarios</h2>
            <div>
                <div className="busqueda">
                    <input  placeholder="Busqueda" className="busqueda-in"></input>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table">
                            <th  >Identificador</th>
                            <th >Usuario</th>
                            <th >Correo</th>
                            <th >Estado</th>
                            <th >Editar / Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaUsuarios.map((usuarios) => {
                            return (
                                <RowsTable key={nanoid()} usuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
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
export default UserMaster