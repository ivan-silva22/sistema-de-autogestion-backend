import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarCarrera = [
  check("nombreCarrera")
    .notEmpty()
    .withMessage("El nombre de la carrera es obligatorio")
    .isLength({ min: 2, max: 500 })
    .withMessage("El nombre debe tener entre 2 y 500 caracteres"),
  check("materias").isArray(),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarCarrera;
