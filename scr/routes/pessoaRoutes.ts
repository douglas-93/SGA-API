import { Router } from 'express';
import {createPessoa, listPessoas, updatePessoa, deletePessoa} from "../controllers/pessoaController";

const router = Router();

router.post('/pessoas', createPessoa);
router.get('/pessoas', listPessoas);
router.put('/pessoas/:id', updatePessoa);
router.delete('/pessoas/:id', deletePessoa);

export default router;
