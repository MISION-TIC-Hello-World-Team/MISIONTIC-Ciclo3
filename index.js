import Express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { stringConexion } from "./stringConexion.js";

const app = Express();
app.use(Express.json());

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

let baseDeDatos;
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