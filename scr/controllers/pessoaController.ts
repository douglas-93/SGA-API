import {Request, Response} from 'express';
import {addPessoa, delPessoa, getPessoas, upPessoa} from "../models/pessoaModel";

export const createPessoa = async (req: Request, res: Response) => {
    try {
        const newPessoa = await addPessoa(req.body);
        res.status(201).json(newPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao criar pessoa' });
    }
};

export const listPessoas = async (_req: Request, res: Response) => {
    try {
        const pessoas = await getPessoas();
        res.json(pessoas);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao listar pessoas' });
    }
};

export const updatePessoa  = async (req: Request, res: Response) => {
    try {
        const updatedPessoa = await upPessoa(req.body.id, req.body);
        res.json(updatedPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar pessoa' });
    }
}

export const deletePessoa = async (req: Request, res: Response) => {
    try {
        const deletedPessoa = await delPessoa(req.body.id);
        res.json(deletedPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar pessoa' });
    }
}