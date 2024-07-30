import { Router } from "express";
import { agregarCarrera } from "../controllers/carrera.controllers";
import validarCarrera from "../helpers/validarCarrera";

const router = Router();

router.route('/carreras').post(validarCarrera, agregarCarrera);

export default router;