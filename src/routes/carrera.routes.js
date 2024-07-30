import { Router } from "express";
import { agregarCarrera, listarCarreras } from "../controllers/carrera.controllers";
import validarCarrera from "../helpers/validarCarrera";

const router = Router();

router.route('/carreras').post(validarCarrera, agregarCarrera).get(listarCarreras);

export default router;