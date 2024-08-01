import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarAlumnoLogin = [
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
    (req, res, next) =>{
        resultadoValidacion(req, res, next);
    }
];

export default validarAlumnoLogin;
