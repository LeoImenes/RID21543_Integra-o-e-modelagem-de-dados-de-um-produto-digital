import { Request, Response } from "express";
import { Prisma, Pedido } from "@prisma/client";
import { pedidosService } from "../services/pedidos.services";

export const pedidoController = {
  async getAll(req: Request, res: Response) {
    const books = await pedidosService.getAll();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const book = await pedidosService.getById(id);
    if (!book) return res.status(404).json({ error: "Pedido não encontrado" });
    res.json(book);
  },

  async create(req: Request, res: Response) {
    const { cliente, status, descricao, itens } = req.body;

    try {
      const pedido = await pedidosService.create({
        cliente,
        status,
        descricao,
        itens,
      });

      res.status(201).json(pedido);
    } catch (err) {
        console.log(err)
      res.status(400).json({ error: "Error a", details: err });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const book = await pedidosService.update(id, req.body);
      res.json(book);
        } catch (err) {
        res.status(400).json({ error: "Erro ao atualizar pedido" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await pedidosService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: "Erro ao deletar pedido" });
    }
  },
};
