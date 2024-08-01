import { Router } from "express";
import {
  actualizarAlumno,
  actualizarEstadoAcademico,
  agregarMaterias,
  crearAlumno,
  listarAlumnos,
  loginAlumno,
  obtenerAlumno,
} from "../controllers/alumno.controllers";
import validarAlumno from "../helpers/validarAlumno";
import validarAlumnoLogin from "../helpers/validarAlumnoLogin";
import validarPassword from "../helpers/validarPassword";

const router = Router();

router.route("/alumnos").post(validarAlumno, crearAlumno).get(listarAlumnos);
router.route("/alumnos/:id").get(obtenerAlumno).put(validarPassword, actualizarAlumno);
router.route("/login").post(validarAlumnoLogin, loginAlumno);
router.route("/materia/:id").put(agregarMaterias);
router.route("/estado/:id").put(actualizarEstadoAcademico);

export default router;
