import Express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { stringConexion } from "./stringConexion.js";
import cors from "cors";
import { appListen } from "./index.js";
import { baseDeDatos } from "./index.js";
import main from "./index.js";

const app = Express();
app.use(Express.json());
app.use(cors());

const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
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

//main();

/*
export const mainSales= () => {
    client.connect((err, db) => {
        if (err) {
            console.error('Error conectando a la base de datos');
            return 'error';
        }
        baseDeDatos = db.db('concesionario');
        console.log('baseDeDatos sales exitosa');
        appListen();
    });

};
*/

