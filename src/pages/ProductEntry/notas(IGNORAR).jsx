import { useState } from "react";

const ProductEntry = () => {
    // DEBE ESTAR DENTRO DE OTRA FUNCION GLOBAL! useEffect que corre solo la primera vez cuando carga la pag porque el segundo argumento esta vacio. 
    //Si el argumento tuviera algo, then cada vez que cambie ese argumento, corre la funtion dentro. 
    //Un useEffec es una function dentro de otra function siendo la interna la que se ejecuta cuando cambia el segundo argumento. NUNCA DEBE NO TENER SEGUNDO ARGUMENTO PORQUE SI NO, QUEDA EN LOOP Y ROMPE EL WEBSITE
    /*
    useEffect(() => {
        console.log("hola");
    }, [])
    */

    //Onchange = Agrega a variable cada cambio que se va dando dentro del imput. En la parte de console.log podria ir el setter del useState. 
    //La forma de abajo es la más básica pero para menos código, dentro del onchange dentro del imput, agregar lo que correria la function (example 2)
    // example 1 = const identificadorProducto = (e) => { console.log(e.target.value) }; 
    // example 2= Dentro del la form or tabla: <input onChange={(e)=> {console.log(e.target.value)}} type="text" required /> / Same, console.log can be chnaged to setter

    //onClick = cuando click en el boton, se ejecuta lo que este en la variable. Donde ese haga click debe tener type="button"

    //UseState = permite crear setters de una variable. Can be used along with OnChange and OnClick. Primer argunmento is like getter, sencond setter from Java
    // const [productID,setProductID]=useState("");

    // IF Simplificado (Renderización condicional). SAME SINTAX "IF" EXCEL (IF=x=y,j(true),k(false)) ---> variable ? X : Y (If variable is true, equal to X, else equal to Y)
    // You can use an useEffect along with it which was bringing a variable from a useState
    /*
    const [edad,setEdad] = useState(0); // set to 0 by default
    const [esMenor,setEsMenor] = useState(false); // set to false by default
    useEffect(() => {
        if(edad>18){
            "pasa K"
            setEsMenor(false);
        }else{
            "pasa J"
            setEsMenor(true);
        }
    }, [edad])
    
    {esMenor?"Pasa X: Pasa Y"} -- Si variable esMenor es true, X, otherwise Y. ** USE {} when within HTML code for JS code to work
    */

   // TOGGLE (Similar to IF above but without else) Use it when want something to show when button clicked and then hide, when clicked again
   /* 
    const [mostrarCampos,setMostrarCampos] = useState(false);
    <buttom>onClick={()=>setMostrarCampos(!mostrarCampos)}</buttom> // bc ! esta dentro de () means, everytime set.. es diferente a mostra.. muestre this or that. 

    {mostrarCampos && ("Show whatever you want to happen")} 
    */

    // MAP = > Cuando entra un .json pero queremos que devuelva HTML / Sirve para que cargue datos de una DB
    /*
    {listaProductos.map(productos)}=>{ 
        <td>{producto.valor}</td> . // Se pone whatever este como variables en las columnas, en este caso "valor", se repite con tods las columns
    }
    */
    
}