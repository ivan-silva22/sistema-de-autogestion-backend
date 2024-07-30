import Examen from "../models/examen";

export const incribirExamen = async(req, res) =>{
    try {
        const nuevoExamen = await Examen(req.body);
        await nuevoExamen.save();
        res.status(201).json({
            mensaje: "la inscribcion a los examen se guardo en la base de datos correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mesaje: "Error al intentar agregar la carrera"
        })
    }
}