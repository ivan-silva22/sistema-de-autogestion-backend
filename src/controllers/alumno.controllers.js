import Alumno from "../models/alumno";
import bcrypt from "bcrypt";

export const crearAlumno = async (req, res) => {
  try {
    const { dni, password } = req.body;
    let alumno = await Alumno.findOne({dni: dni });
    if (alumno) {
      return res.status(400).json({
        mensaje: "El dni ya existe",
      });
    }
    alumno = new Alumno(req.body);
    const salt = bcrypt.genSaltSync(10);
    alumno.password = bcrypt.hashSync(password, salt);
    await alumno.save();
    res.status(201).json({
      mensaje: "El alumno se guardo en la base de datos correctamente",
      alumno,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar el alumno",
    });
  }
};

export const listarAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.status(200).json(alumnos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al obtener los alumnos",
    });
  }
};

export const obtenerAlumno = async (req, res) => {
  try {
    const dni = parseInt(req.params.id);
    const alumno = await Alumno.findOne({dni: dni});
    res.status(200).json(alumno);
  } catch (error) {
    console.log(error);
    res.status(404).json({
        mensaje: "Error, no se puedeobtener el alumno"
    })
  }
    
};

export const actualizarAlumno = async (req, res) => {
    try {
        console.log(req.body);
        const { _id, password } = req.body;
        const alumno = await Alumno.findById(_id);
        const salt = bcrypt.genSaltSync(10);
        let passwordEncriptado =  bcrypt.hashSync(password, salt);
        alumno.password = passwordEncriptado;
        await alumno.save();
        res.status(200).json({
            mensaje: "Contraseña se actualizo correctamente"
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
          mensaje: "Error al obtener el alumno",
        });
      }
};

export const loginAlumno = async (req, res) => {
  try {
    const { dni, password } = req.body;
    let alumno = await Alumno.findOne({ dni });
    if (!alumno) {
      return res.status(404).json({
        mensaje: "El DNI o password es incorrecto - DNI",
      });
    }
    const passwordValido = bcrypt.compareSync(password, alumno.password);
    if (!passwordValido) {
      res.status(404).json({
        mensaje: "El DNI o password es incorrecto - password",
      });
    }
    res.status(200).json({
      mensaje: "El DNI y password correctos",
      nombres: alumno.nombres,
      apellido: alumno.apellido,
      dni: alumno.dni,
      carrera: alumno.carrera,
      estadoAcademico: alumno.estadoAcademico,
      cursando: alumno.cursando,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, legajo o password invalidos",
    });
  }
};

export const agregarMaterias = async(req, res) =>{
  try {
    await Alumno.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El alumno se actualizo correctamente"
    })
    console.log(req.body.cursando);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se puede agregar la materia"
    })
  }
}

export const actualizarEstadoAcademico = async(req, res)=>{
  try {
    const { id } = req.params; 
    const alumnoActualizado = req.body; 
    const alumnoOriginal = await Alumno.findById(id);
    if (!alumnoOriginal) {
      return res.status(404).json({
        mensaje: "Alumno no encontrado",
      });
    }
    const nuevasMateriasEstadoAcademico = alumnoActualizado.estadoAcademico.map(materia => materia.nombreMateria);
    alumnoOriginal.cursando = alumnoOriginal.cursando.filter(materia => 
      !nuevasMateriasEstadoAcademico.includes(materia.nombreMateria)
    );
    alumnoOriginal.estadoAcademico = alumnoActualizado.estadoAcademico;
    await alumnoOriginal.save();
    res.status(200).json({
      mensaje: "El estado académico se actualizó correctamente",
      alumno: alumnoOriginal, 
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se puede actualizar el estado academico del alumno"
    })
  }
}

