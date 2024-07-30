import { Router } from "express";
import { crearAlumno, listarAlumnos, obtenerAlumno } from "../controllers/usuario.controllers";


const router = Router();

router.route('/alumnos').post(crearAlumno).get(listarAlumnos);
router.route('/alumnos/:id').get(obtenerAlumno);


 
export default router;

