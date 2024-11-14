import express from "express";
import {acessoController} from "../controllers/acessoController";

const router = express.Router();

router.post('/acessos', (req, res) => acessoController.create(req, res));
router.get('/acessos', (req, res) => acessoController.list(req, res));
router.put('/acessos', (req, res) => acessoController.update(req, res));
router.delete('/acessos', (req, res) => acessoController.delete(req, res));

export default router;
