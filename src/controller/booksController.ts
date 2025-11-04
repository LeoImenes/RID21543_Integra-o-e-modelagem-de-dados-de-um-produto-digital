// src/controllers/bookController.ts
import { Request, Response } from "express";
import { bookService } from "../services/booksServices";

export const bookController = {
  async getAll(req: Request, res: Response) {
    const books = await bookService.getAll();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const book = await bookService.getById(id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  },

  async create(req: Request, res: Response) {
    console.log('Creating book...');
    const {id, titulo, num_paginas, isbn, editora } = req.body;
    try {
      const book = await bookService.create({ id, titulo, num_paginas, isbn, editora });
      res.status(201).json(book);
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: "Error creating book" });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const book = await bookService.update(id, req.body);
      res.json(book);
    } catch (err) {
      res.status(400).json({ error: "Error updating book" });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await bookService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: "Error deleting book" });
    }
  },
};
