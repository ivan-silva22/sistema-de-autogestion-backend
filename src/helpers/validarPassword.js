import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPassword = [
  check("password")
    .notEmpty()
    .withMessage("La contraseña es un campo obligatorio")
    .isLength({ min: 8, max: 16 })
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/)
    .withMessage(
      "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
    ),
    (req, res, next) =>{
        resultadoValidacion(req, res, next);
    }
];

export default validarPassword;