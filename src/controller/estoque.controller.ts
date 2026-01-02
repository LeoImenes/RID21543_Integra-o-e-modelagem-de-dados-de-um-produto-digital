// src/controllers/bookController.ts
import { Request, Response } from "express";
import { estoqueService } from "../services/estoque.services";
import { Prisma } from "@prisma/client";

export const estoqueController = {
  async getAll(req: Request, res: Response) {
    const books = await estoqueService.getAll();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const estoque = await estoqueService.getById(id);
    if (!estoque) return res.status(404).json({ error: "Estoque nao encontrado" });
    res.json(estoque);
  },

  async create(req: Request, res: Response) {
    const { produtoId, quantidade } = req.body;

    if (!produtoId) {
      return res.status(400).json({ error: "produtoId é obrigatório" });
    }

    try {
      const estoque = await estoqueService.create({
        produtoId,
        quantidade,
      });

      res.status(201).json(estoque);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: "Erro ao criar estoque" });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const estoque = await estoqueService.update(id, req.body);
      res.json(estoque);
    } catch (err) {
      res.status(400).json({ error: "Erro ao atualizar estoque" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await estoqueService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: "Erro ao deletar estoque" });
    }
  },
};
