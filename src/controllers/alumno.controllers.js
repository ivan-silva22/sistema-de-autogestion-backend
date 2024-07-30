import Alumno from "../models/alumno";

export const crearAlumno = async(req, res)=>{
    try {
        const {legajo} = req.body;
        let alumno = await Alumno.findOne({legajo});
        if(alumno){
            return res.status(400).json({
                mensaje: "El legajo ya existe"
            })
        }
        alumno = new Alumno(req.body);
        await alumno.save();
        res.status(201).json({
            mensaje: "El alumno se guardo en la base de datos correctamente",
            alumno
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar agregar el alumno'
        })
    }
}

export const listarAlumnos = async(req, res) =>{
    try {
        const alumnos = await Alumno.find();
        res.status(200).json(alumnos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al obtener los alumnos"
        })
    }
}

export const obtenerAlumno = async(req, res) =>{
    try {
        const alumno = await Alumno.findById(req.params.id);
        res.status(200).json(alumno);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al obtener el alumno"
        })
    }
}



