import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarAlumno = [
  check("nombres")
    .notEmpty()
    .withMessage("El nombre del alumno es obligatorio")
    .isLength({ min: 2, max: 300 })
    .withMessage("El nombre del alumno debe tener entre 2 y 300 caracteres"),
  check("apellido")
    .notEmpty()
    .withMessage("El apellido del alumno es obligatorio")
    .isLength({ min: 2, max: 300 })
    .withMessage("El apellido del alumno debe tener entre 2 y 300 caracteres"),
  check("dni")
    .notEmpty()
    .withMessage("El DNI del alumno es obligatorio")
    .isNumeric()
    .withMessage("El DNI debe ser numerico")
    .isLength({ max: 8 })
    .withMessage("El DNI debe tener hasta 8 caracteres"),
  check("carrera")
    .notEmpty()
    .withMessage("La carrera del alumno es un dato obligatorio")
    .isIn([
      "Profesorado en Historia",
      "Profesorado en Matematica",
      "Tecnicatura en Gestion Agropecuaria",
      "Tecnicatura en Agroindustria de los Alimentos",
      "Tecnicatura Superior en Desarrollo de Software",
    ])
    .withMessage("La carrera debe ser una opcion valida"),
  check("legajo")
    .notEmpty()
    .withMessage("El legajo del alumno es obligatorio")
    .isNumeric()
    .isLength({ max: 4 })
    .withMessage("El legajo debe tener como maximo 4 caracteres"),
  check("password")
    .notEmpty()
    .withMessage("El password es obligatorio")
    .isLength({ min: 8, max: 16 })
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/)
    .withMessage(
      "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
    ),
  check("estadoAcademico").optional(),
  check("estado").optional(),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarAlumno;