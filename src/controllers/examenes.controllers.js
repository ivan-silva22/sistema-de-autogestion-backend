import Examen from "../models/examen";

export const inscripcionExamenFinal = async (req, res) =>{
    try {
        const { nombreMateria } = req.body;
        let examen = await Examen.findOne({nombreMateria});
        if(examen){
            return res.status(400).json({
                mensaje: "Ya existe el nombre de la materia"
            })
        }
        examen = new Examen(req.body);
        await examen.save();
        res.status(201).json({
            mensaje: "los examenes ya se guardo en la base de datos correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar crear los examenes"
        })
    }
}

export const obtenerExamenesFinales = async (req, res) =>{
    try {
        const examenes = await Examen.find();
        res.status(200).json(examenes)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al obtener los examenes finales"
        })
    }
}