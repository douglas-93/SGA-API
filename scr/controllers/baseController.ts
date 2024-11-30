import { Request, Response } from 'express';

export class BaseController<T> {
    private service: any;

    constructor(service: any) {
        this.service = service;
    }

    // Método para criar um novo registro
    async create(req: Request, res: Response) {
        try {
            const newItem = await this.service.add(req.body as T);
            res.status(201).json(newItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Falha ao criar item' });
        }
    }

    // Método para listar todos os registros
    async list(_req: Request, res: Response) {
        try {
            const items = await this.service.getAll();
            res.status(200).json(items);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Falha ao listar itens' });
        }
    }

    // Método para listar todos os registros
    async getBy(_req: Request, res: Response) {
        try {
            const item = await this.service.getBy(_req.body);
            res.status(200).json(item);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Falha ao listar itens' });
        }
    }

    // Método para atualizar um registro
    async update(req: Request, res: Response) {
        try {
            const { id, ...data } = req.body;
            const updatedItem = await this.service.update(id, data);
            res.status(201).json(updatedItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Falha ao atualizar item' });
        }
    }

    // Método para deletar um registro
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const deletedItem = await this.service.delete(id);
            res.status(200).json(deletedItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Falha ao deletar item' });
        }
    }
}
