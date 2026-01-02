// src/controllers/bookController.ts
import { Request, Response } from "express";
import { itensPedidoService } from "../services/itensPedido.services";
import { Prisma } from "@prisma/client";

export const itensPedidoController = {
  async getAll(req: Request, res: Response) {
    const books = await itensPedidoService.getAll();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const estoque = await itensPedidoService.getById(id);
    if (!estoque) return res.status(404).json({ error: "Itens não encontrados" });
    res.json(estoque);
  },

  async create(req: Request, res: Response) {
    const { pedido, produto, quantidade }: Prisma.ItensPedidoCreateInput =
      req.body;
    try {
      const estoque = await itensPedidoService.create({
        pedido,
        produto,
        quantidade,
      });
      res.status(201).json(estoque);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "Error ao criar itensPedido" });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const estoque = await itensPedidoService.update(id, req.body);
      res.json(estoque);
    } catch (err) {
      res.status(400).json({ error: "Erro ao atualizar itensPedido" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await itensPedidoService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: "Erro ao deletar itensPedido" });
    }
  },
};
