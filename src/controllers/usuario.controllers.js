import Usuario from "../models/usuario";

export const crearAlumno = async(req, res)=>{
    try {
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: "El alumno se guardo en la base de datos correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar agregar el alumno'
        })
    }
}

export const listarAlumnos = async (req, res) =>{
    try {   
        const alumnos = await Usuario.find();
        res.status(200).json(alumnos);
    } catch (error) {
        console.log(error);
    }
}

export const inscribirMateria = async(req, res) =>{
    try {
        const { materias } = req.body;
        res.status(200).json(materias);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar inscribirse a las materias"
        })
    }
}


