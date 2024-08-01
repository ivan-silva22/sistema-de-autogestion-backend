import { Router } from "express";
import { agregarAdmin, loginAdmin, obtenerAdmin } from "../controllers/admin.controllers";
import validarAdmin from "../helpers/validarAdmin";
import validarAdminLogin from "../helpers/validarAdminLogin";

const router = Router();

router.route('/nuevo').post(validarAdmin, agregarAdmin);
router.route('/nuevo/:id').get(obtenerAdmin);
router.route("/login").post(validarAdminLogin, loginAdmin);


export default router;