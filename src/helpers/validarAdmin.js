import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarAdmin = [
    check("nombreAdmin")
        .notEmpty()
        .withMessage("El nombre es un campo obligatorio")
        .isLength({min: 2, max: 300})
        .withMessage("El nombre debe tener entre 2 y 300 caracteres"),
    check("email")
        .notEmpty()
        .withMessage("El email es un campo obligatorio")
        .isEmail()
        .withMessage("El formato del email no es valido"),
    check("password")
        .notEmpty()
        .withMessage("La contraseña es un campo obligatorio")
        .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
        .withMessage("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."),
        (req, res, next) =>{
            resultadoValidacion(req, res, next);
        }
]

export default validarAdmin;