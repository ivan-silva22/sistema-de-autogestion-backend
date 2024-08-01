import Examen from "../models/examen";

export const inscripcionExamenFinal = async (req, res) =>{
    try {
        const { nombreMateria, alumnosInscriptos } = req.body;
        let examen = await Examen.findOne({ nombreMateria });
        if (examen) {
            const alumno = alumnosInscriptos[0];    
            if (!examen.alumnosInscriptos.some(
              (inscripto) => inscripto.dni === alumno.dni
            )) {
              examen.alumnosInscriptos.push(alumno);
              await examen.save();
            } else {
              return res.status(200).json({
                mensaje: "El alumno ya está inscrito en este examen",
              });
            }
          } else {
            examen = new Examen({
              nombreMateria,
              fecha: req.body.fecha, 
              alumnosInscriptos,
            });
            await examen.save();
          }
      
          res.status(201).json({
            mensaje: "El examen se guardó correctamente en la base de datos",
          });
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

export const eliminarDatosExamen = async(req, res) =>{
    try {
        await Examen.deleteMany({});
        res.status(200).json({
            mensaje: `Se eliminaron documentos de la base de datos.`,
          });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error, no se puede eliminar los datos"
        })
    }
}