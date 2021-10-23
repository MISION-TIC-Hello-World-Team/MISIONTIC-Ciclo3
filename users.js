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

let baseDeDatos;

export const mainUsers= () => {
    client.connect((err, db) => {
        if (err) {
            console.error('Error conectando a la base de datos');
            return 'error';
        }
        baseDeDatos = db.db('concesionario');
        console.log('baseDeDatos sales exitosa');
        return app.listen(6000, () => {
            console.log('escuchando puerto 6000');
        });
    });

};

