import Administradir from "../models/admin";

export const agregarAdmin = async(req, res) =>{
    try {
        const { email } = req.body;
        let admin = await Administradir.findOne({email});
        if(admin){
            return res.status(400).json({
                mensaje: "El email ya existe"
            })
        }
        admin = new Administradir(req.body);
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