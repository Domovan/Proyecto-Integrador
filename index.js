import express from 'express';
import mongoose, { mongo } from 'mongoose';
import { DatesModel } from './models/Datesmodels.js';

mongoose.connect('mongodb://localhost:27017/citas').then(
    ()=>{
        console.log('conexion exitosa')
    }
)

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
res.send('hola desde mi servidor')
})

app.post('/create', (req,res)=>{
    const pregunta1= req.body.pregunta1;
    const pregunta2 = req.body.pregunta2;
    const pregunta3 = req.body.pregunta3;
    const pregunta4 = req.body.pregunta4;
    const pregunta5 = req.body.pregunta5;
    const pregunta6 = req.body.pregunta6;
    const pregunta7= req.body.pregunta7;
    const pregunta8 = req.body.pregunta8;
    const pregunta9 = req.body.pregunta9;
    const pregunta10 = req.body.pregunta10;
    const pregunta11 = req.body.pregunta11;
    const pregunta12 = req.body.pregunta12;
    const pregunta13= req.body.pregunta13;
    const pregunta14 = req.body.pregunta14;
    const pregunta15 = req.body.pregunta15;
    const pregunta16 = req.body.pregunta16;
    const pregunta17 = req.body.pregunta1;
    const pregunta18 = req.body.pregunta18;
    const pregunta19 = req.body.pregunta19;
    const pregunta20 = req.body.pregunta20
    console.log(!pregunta1,!pregunta2,!pregunta3,!pregunta4,!pregunta5,!pregunta6,!pregunta8,!pregunta9,!pregunta10,!pregunta11,!pregunta12,!pregunta13,!pregunta14,!pregunta15,!pregunta16,!pregunta17,!pregunta18,!pregunta19,!pregunta20)
    if(!pregunta1||!pregunta2||!pregunta3||!pregunta4||!pregunta5||!pregunta6||!pregunta8||!pregunta9||!pregunta10||!pregunta11||!pregunta12||!pregunta13||!pregunta14||!pregunta15||!pregunta16||!pregunta17||!pregunta18||!pregunta19||!pregunta20){
        return res.status(400).json({
            msg:"Necesitas ingresar todos los valores para almacenar un documento"
        })
    }
    const obj = {
        pregunta1,
        pregunta2,
        pregunta3,
        pregunta4,
        pregunta5,
        pregunta6,
        pregunta7,
        pregunta8,
        pregunta9,
        pregunta10,
        pregunta11,
        pregunta12,
        pregunta13,
        pregunta14,
        pregunta15,
        pregunta16,
        pregunta17,
        pregunta18,
        pregunta19,
        pregunta20
 }
    DatesModel.create(obj);
    return res.status(200).json({
        msg:"Formulario almacenado con exito"
    })
})

app.listen(4000, ()=>{
    console.log('servidor en linea')
})