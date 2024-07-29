import { Router } from "express";
import { crearAlumno } from "../controllers/usuario.controllers";

const router = Router();

router.route('/alumnos').post(crearAlumno)
 
export default router;

