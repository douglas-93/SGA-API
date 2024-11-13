import express from "express";
import {empresaController} from "../controllers/empresaController";

const router = express.Router();

router.post('/empresas', (req, res) => empresaController.create(req, res));
router.get('/empresas', (req, res) => empresaController.list(req, res));
router.put('/empresas', (req, res) => empresaController.update(req, res));
router.delete('/empresas', (req, res) => empresaController.delete(req, res));

export default router;
