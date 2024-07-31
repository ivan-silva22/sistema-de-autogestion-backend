import Alumno from "../models/alumno";
import bcrypt from "bcrypt";

export const crearAlumno = async(req, res)=>{
    try {
        const {legajo, password} = req.body;
        let alumno = await Alumno.findOne({legajo});
        if(alumno){
            return res.status(400).json({
                mensaje: "El legajo ya existe"
            })
        }
        alumno = new Alumno(req.body);
        const salt = bcrypt.genSaltSync(10);
        alumno.password = bcrypt.hashSync(password, salt);
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

export const actualizarAlumno = async(req, res) =>{
    try {
        const alumnoActualizado = await Alumno.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(alumnoActualizado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Erro no se puede actualizar el alumno"
        })
    }
}

export const login = async(req, res) =>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, legajo o password invalidos"
        })
    }
}

