import { Router } from "express";
import { crearAlumno, listarAlumnos } from "../controllers/usuario.controllers";

const router = Router();

router.route('/alumnos').post(crearAlumno).get(listarAlumnos);
 
export default router;

