import { Router } from "express";
import { inscripcionExamenFinal, obtenerExamenesFinales } from "../controllers/examenes.controllers";
import validarExamen from "../helpers/validarExamen";

const router = Router();

router.route('/finales').post(validarExamen ,inscripcionExamenFinal).get(obtenerExamenesFinales);

export default router;