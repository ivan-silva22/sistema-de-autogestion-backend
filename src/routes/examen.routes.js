import { Router } from "express";
import {
  eliminarDatosExamen,
  inscripcionExamenFinal,
  obtenerExamenesFinales,
} from "../controllers/examenes.controllers";
import validarExamen from "../helpers/validarExamen";

const router = Router();

router
  .route("/finales")
  .post(validarExamen, inscripcionExamenFinal)
  .get(obtenerExamenesFinales)
router.route("/eliminar").delete(eliminarDatosExamen)
export default router;
