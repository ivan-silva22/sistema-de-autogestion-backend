import { Router } from "express";
import {
    actualizarAlumno,
  crearAlumno,
  listarAlumnos,
  obtenerAlumno,
} from "../controllers/alumno.controllers";
import validarAlumno from "../helpers/validarAlumno";

const router = Router();

router.route("/alumnos").post(validarAlumno, crearAlumno).get(listarAlumnos);
router.route("/alumnos/:id").get(obtenerAlumno).put(validarAlumno, actualizarAlumno); 

export default router;
