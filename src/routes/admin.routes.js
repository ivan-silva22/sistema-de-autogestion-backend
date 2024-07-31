import { Router } from "express";
import { agregarAdmin } from "../controllers/admin.controllers";

const router = Router();

router.route('/admin').post(agregarAdmin);


export default router;