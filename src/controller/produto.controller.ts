// src/controllers/bookController.ts
import { Request, Response } from "express";
import { produtoService } from "../services/produto.services";
import { Prisma, Produtos } from "@prisma/client";

export const produtoController = {
  async getAll(req: Request, res: Response) {
    const books = await produtoService.getAll();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const book = await produtoService.getById(id);
    if (!book) return res.status(404).json({ error: "Produto nao encontrado" });
    res.json(book);
  },

  async create(req: Request, res: Response) {
    console.log('Creating product...');
    const {ativo, descricao, nome, preco}:Prisma.ProdutosCreateInput = req.body;
    try {
      const book = await produtoService.create({
        ativo: ativo ?? undefined,
        descricao: descricao ?? undefined,
        nome: nome ?? "",
        preco: preco ?? 0,
      });
      res.status(201).json(book);
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: "Erro ao criar produto" });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const book = await produtoService.update(id, req.body);
      res.json(book);
    } catch (err) {
      res.status(400).json({ error: "Erro ao atualizar produto" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await produtoService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: "Erro ao deletar produto" });
    }
  },
};
