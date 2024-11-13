import express from "express";
import {veiculoController} from "../controllers/veiculoController";

const router = express.Router();

router.post('/veiculos', (req, res) => veiculoController.create(req, res));
router.get('/veiculos', (req, res) => veiculoController.list(req, res));
router.put('/veiculos', (req, res) => veiculoController.update(req, res));
router.delete('/veiculos', (req, res) => veiculoController.delete(req, res));

export default router;