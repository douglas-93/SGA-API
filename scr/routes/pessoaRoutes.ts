import express from 'express';
import {pessoaController} from "../controllers/pessoaController";

const router = express.Router();

router.post('/pessoas', (req, res) => pessoaController.create(req, res));
router.get('/pessoas', (req, res) => pessoaController.list(req, res));
router.put('/pessoas', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas', (req, res) => pessoaController.delete(req, res));

export default router;
