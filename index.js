import Express from "express";
import { MongoClient } from "mongodb";
import { stringConexion } from "./stringConexion.js";

const app = Express();
app.use(Express.json());
const stringConexion1 = stringConexion;
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