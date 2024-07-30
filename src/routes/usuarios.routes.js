import { Router } from "express";
import { crearAlumno, inscribirMateria, listarAlumnos } from "../controllers/usuario.controllers";

const router = Router();

router.route('/alumnos').post(crearAlumno).get(listarAlumnos);
router.route('/inscribirmateria').post(inscribirMateria);
 
export default router;

