import express, { json } from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

const app = express();
app.use(express.json());
app.use(cors())
app.get('/healt', (req, res) => {
    res.send({message: 'Servidor corriendo sin problemas'})
});
app.get('/nose', (req, res) => {
    res.status(200).json({
        message: 'Porygon'
    })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})