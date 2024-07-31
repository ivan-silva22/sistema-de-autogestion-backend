import { Router } from "express";
import { agregarAdmin, obtenerAdmin } from "../controllers/admin.controllers";
import validarAdmin from "../helpers/validarAdmin";

const router = Router();

router.route('/admin').post(validarAdmin, agregarAdmin);
router.route('/admin/:id').get(obtenerAdmin);


export default router;