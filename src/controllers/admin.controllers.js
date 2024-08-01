import Administradir from "../models/admin";
import bcrypt from "bcrypt";

export const agregarAdmin = async(req, res) =>{
    try {
        const { email, password } = req.body;
        let admin = await Administradir.findOne({email});
        if(admin){
            return res.status(400).json({
                mensaje: "El email ya existe"
            })
        }
        admin = new Administradir(req.body);
        const salt = bcrypt.genSaltSync(10);
        admin.password = bcrypt.hashSync(password, salt);
        await admin.save();
        res.status(201).json({
            mensaje: "El administrador se creo correctamente",
            admin
        }); 
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se puede crear el administrador"
        })
    }
}

export const obtenerAdmin = async(req, res) =>{
    try {
        const admin = await Administradir.findById(req.params.id);
        res.status(200).json(admin);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se puede obtener al administrador"
        })
    }
}

export const loginAdmin = async(req, res) =>{
    try {
        const {email, password} = req.body;
        let admin = await Administradir.findOne({email});
        if(!email){
            return res.status(404).json({
                mensaje: "El email o password es incorrecto - email"
            })
        }
        const passwordValido = bcrypt.compareSync(password, admin.password);
        if(!passwordValido){
            return res.status(404).json({
                mensaje: "El email o password es incorrecto - password"
            })
        }
        res.status(200).json({
            mensaje: "Email y password correctos",
            nombreAdmin: admin.nombreAdmin,
            email: admin.email
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se puede iniciar sesion"
        })
    }
}