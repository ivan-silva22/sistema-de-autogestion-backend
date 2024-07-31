import { Router } from "express";
import { agregarAdmin, obtenerAdmin } from "../controllers/admin.controllers";

const router = Router();

router.route('/admin').post(agregarAdmin);
router.route('/admin/:id').get(obtenerAdmin);


export default router;