import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarExamen = [
  check("nombreMateria")
    .notEmpty()
    .withMessage("El nombre de la materia es obligatorio")
    .isLength({ min: 2, max: 500 })
    .withMessage("El nombre de la materia debe estar entre 2 y 500 caracteres"),
  check("fecha")
    .notEmpty()
    .withMessage("La fecha es un dato obligatorio")
    .isLength({ min: 2, max: 500 })
    .withMessage("La fecha debe estar entre 2 y 500 caracteres"),
  check("alumnosInscriptos")
    .isArray()
    .withMessage("Los alumnos inscriptos deben ser un array"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarExamen;