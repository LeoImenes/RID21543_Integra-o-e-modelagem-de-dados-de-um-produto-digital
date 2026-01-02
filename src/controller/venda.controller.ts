import { Request, Response } from "express";
import { Prisma, Venda } from "@prisma/client";
import { vendaService } from "../services/venda.services";

export const vendaController = {
  async getAll(req: Request, res: Response) {
    const sells = await vendaService.getAll();
    res.json(sells);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const sell = await vendaService.getById(id);
    if (!sell) return res.status(404).json({ error: "Venda não encontrada" });
    res.json(sell);
  },

  async create(req: Request, res: Response) {
    console.log("Creating venda...");
    const { pedido, total, dataVenda } = req.body;
    try {
      const sell = await vendaService.create({
        pedido: pedido ?? undefined,
        total: total ?? undefined,
      });
      res.status(201).json(sell);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "Erro ao criar venda" });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const sell = await vendaService.update(id, req.body);
      res.json(sell);
    } catch (err) {
      res.status(400).json({ error: "Erro ao atualizar venda" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await vendaService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: "Erro ao deletar venda" });
    }
  },
};
