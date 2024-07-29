import Carrera from "../models/carrera";

export const agregarCarrera = async(req, res) =>{
    try {
        const nuevaCarrera = await Carrera(req.body);
        await nuevaCarrera.save();
        res.status(201).json({
            mensaje: "La carrera se guardo en la base de datos correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar agregar la carrera '
        })
    }
}

export const listarCarreras = async(req, res) =>{
    try {
        const carreras = await Carrera.find();
        res.status(200).json(carreras);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al intentar obtener las carreras"
        })
    }
}