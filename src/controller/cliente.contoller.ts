import { Request, Response } from "express";
import { clienteService } from "../services/cliente.services";

export const clienteController = {
  async getAll(req: Request, res: Response) {
    const clients = await clienteService.getAll();
    res.json(clients);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const client = await clienteService.getById(id);
    if (!client) return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(client);
  },

  async create(req: Request, res: Response) {
    const {id, nome, email, telefone, cpf} = req.body;
    try {
      const book = await clienteService.create({ nome, email, telefone, cpf });
      res.status(201).json(book);
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: "Erro ao criar cliente" });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const book = await clienteService.update(id, req.body);
      res.json(book);
    } catch (err) {
      res.status(400).json({ error: "Erro ao atualizar cliente" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await clienteService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: "Erro ao deletar cliente" });
    }
  },
};
