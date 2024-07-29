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

