
import './productEntry.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';


const descripcionProducto = (e) => { console.log(e.target.value) };
const valorUnitario = (e) => { console.log(e.target.value) };
const estado = (e) => { console.log(e.target.value) };


const GuardarProducto = () => {
    const toastExito = () => toast.success("Producto guardado exitosamente")
    const enviarInfo= ()=>{
        console.log("hellooooo");
    }
    return (
        <div className="login-submit">
            <input onClick={toastExito} type="button" value="Guardar producto" />
            <ToastContainer
                position="bottom-center"
                autoClose={false}

            />
        </div>
    )
}
const ProductEntry = () => {
    // DEBE ESTAR DENTRO DE OTRA FUNCION GLOBAL! useEffect que corre solo la primera vez cuando carga la pag porque el segundo argumento esta vacio. 
    //Si el argumento tuviera algo, then cada vez que cambie ese argumento, corre la funtion dentro. 
    //Un useEffec es una function dentro de otra function siendo la interna la que se ejecuta cuando cambia el segundo argumento. NUNCA DEBE NO TENER SEGUNDO ARGUMENTO PORQUE SI NO, QUEDA EN LOOP Y ROMPE EL WEBSITE
    useEffect(() => {
        //console.log("hola");
    }, [])

    //Onchange = Agrega a variable cada cambio que se va dando dentro del imput. En la parte de console.log podria ir el setter del useState. 
    //La forma de abajo es la más básica pero para menos código, dentro del onchange dentro del imput, agregar lo que correria la function (example 2)
    // example 1 = const identificadorProducto = (e) => { console.log(e.target.value) }; 
    // example 2= Dentro del la form or tabla: <input onChange={(e)=> {console.log(e.target.value)}} type="text" required /> / Same, console.log can be chnaged to setter

    //onClick = cuando click en el boton, se ejecuta lo que este en la variable. Donde ese haga click debe tener type="button"

    //UseState = permite crear setters de una variable. Can be used along with OnChange and OnClick. Primer argunmento is like getter, sencond setter from Java
    // const [productID,setProductID]=useState("");


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
                        <h1>Registro de productos</h1>
                        <form>
                            <div className="group-n">
                                <input onChange={(e)=> {console.log(e.target.value)}} type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Identificador del producto</p>
                            </div>
                            <div className="group-n">
                                <input onChange={descripcionProducto} type="text" required />
                                <span className="highlight"></span>
                                <span className="bar" ></span>
                                <p>Descripción del producto</p>
                            </div>
                            <div className="group-n">
                                <input onChange={valorUnitario} type="number" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <p>Valor unitario</p>
                            </div>
                            <div className="checkbox" >
                                <select onChange={estado} name="estado" multiple required>
                                    <option value="disponible" >Disponible</option>
                                    <option value="No disponible">No Disponible</option>
                                </select>
                            </div>
                            <div >
                                <GuardarProducto />
                            </div>
                            <div className="others">
                                <div>
                                    <Link to="/">Ir a Interfaz Maestra</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductEntry
