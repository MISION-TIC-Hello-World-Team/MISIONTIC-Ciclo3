import Express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { stringConexion } from "./stringConexion.js";
import cors from "cors";



const app = Express();
app.use(Express.json());
app.use(cors());

const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.get("/productMaster", (req, res) => {
    baseDeDatos.collection("producto").find().limit(50).toArray((err, result) => {
        if (err) {
            res.status(500).send("error consultando productos")
        } else {
            res.json(result);
        }
    });
});


app.post("/productMaster/nuevo", (req, res) => {
    const datosProductos = req.body;
    console.log(datosProductos);
    baseDeDatos.collection("producto").insertOne(datosProductos, (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(result);
            res.sendStatus(200);
        }
    });
});

app.patch('/productMaster/editar', (req, res) => {
    const edicion = req.body;
    const filtroProducto = {_id:  new ObjectId(edicion.id)};
    delete edicion.id;
    const operacion = {
        $set:edicion,
    };
    baseDeDatos.collection("producto").updateOne(filtroProducto, operacion, { upsert: true, returnOriginal: true },(err,result)=>{
        if (err){
            console.error("error editando producto",err);
            res.sendStatus(500);
        }else{
            console.log("actualizado con exito");
            res.sendStatus(200);
        }
    });
});
app.delete('/productMaster/eliminar', (req, res) => {
    const filtroProducto = { _id: new ObjectId(req.body.id) };
    baseDeDatos.collection('producto').deleteOne(filtroProducto, (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

// ____ Users
app.get("/userMaster", (req, res) => {
    baseDeDatos.collection("usuarios").find().limit(50).toArray((err, result) => {
        if (err) {
            res.status(500).send("error consultando usuarios")
        } else {
            res.json(result);
        }
    });
});


app.post("/userMaster/nuevo", (req, res) => {
    const datosUsuarios = req.body;
    console.log(datosUsuarios);
    baseDeDatos.collection("usuarios").insertOne(datosUsuarios, (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(result);
            res.sendStatus(200);
        }
    });
});

app.patch('/userMaster/editar', (req, res) => {
    const edicion = req.body;
    const filtroUsuario = {_id:  new ObjectId(edicion.id)};
    delete edicion.id;
    const operacion = {
        $set:edicion,
    };
    baseDeDatos.collection("usuarios").updateOne(filtroUsuario, operacion, { upsert: true, returnOriginal: true },(err,result)=>{
        if (err){
            console.error("error editando usuario",err);
            res.sendStatus(500);
        }else{
            console.log("actualizado con exito");
            res.sendStatus(200);
        }
    });
});
app.delete('/userMaster/eliminar', (req, res) => {
    const filtroUsuario = { _id: new ObjectId(req.body.id) };
    baseDeDatos.collection('usuarios').deleteOne(filtroUsuario, (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

// SALES
app.get("/saleMaster", (req, res) => {
    baseDeDatos.collection("venta").find().limit(50).toArray((err, result) => {
        if (err) {
            res.status(500).send("error consultando ventas")
        } else {
            res.json(result);
        }
    });
});


app.post("/saleMaster/nuevo", (req, res) => {
    const datosventas = req.body;
    console.log(datosventas);
    baseDeDatos.collection("venta").insertOne(datosventas, (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(result);
            res.sendStatus(200);
        }
    });
});

app.patch('/saleMaster/editar', (req, res) => {
    const edicion = req.body;
    const filtroventa = {_id:  new ObjectId(edicion.id)};
    delete edicion.id;
    const operacion = {
        $set:edicion,
    };
    baseDeDatos.collection("venta").updateOne(filtroventa, operacion, { upsert: true, returnOriginal: true },(err,result)=>{
        if (err){
            console.error("error editando venta",err);
            res.sendStatus(500);
        }else{
            console.log("actualizado con exito");
            res.sendStatus(200);
        }
    });
});
app.delete('/saleMaster/eliminar', (req, res) => {
    const filtroventa = { _id: new ObjectId(req.body.id) };
    baseDeDatos.collection('venta').deleteOne(filtroventa, (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});



export let baseDeDatos;
const main = () => {
    client.connect((err, db) => {
        if (err) {
            console.error('Error conectando a la base de datos');
            return 'error';
        }
        baseDeDatos = db.db('concesionario');
        console.log('baseDeDatos exitosa');
        return app.listen(5000, () => {
            console.log('escuchando puerto 5000');
        });
    });

};
main();

export default main;
//mainSales();
//mainUsers();
