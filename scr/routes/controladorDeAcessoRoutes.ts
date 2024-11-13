import express from "express";
import {controladorDeAcessoController} from "../controllers/controladorDeAcessoController";

const router = express.Router();

router.post('/controlador', (req, res) => controladorDeAcessoController.create(req, res));
router.get('/controlador', (req, res) => controladorDeAcessoController.list(req, res));
router.put('/controlador', (req, res) => controladorDeAcessoController.update(req, res));
router.delete('/controlador', (req, res) => controladorDeAcessoController.delete(req, res));

export default router;
