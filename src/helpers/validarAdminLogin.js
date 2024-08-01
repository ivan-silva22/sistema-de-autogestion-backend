import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarAdminLogin = [
  check("email")
    .notEmpty()
    .withMessage("El email es un campo obligatorio")
    .isEmail()
    .withMessage("El formato del email no es valido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es un campo obligatorio")
    .isLength({ min: 8, max: 16 })
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/)
    .withMessage(
      "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
    ),
];

export default validarAdminLogin;
