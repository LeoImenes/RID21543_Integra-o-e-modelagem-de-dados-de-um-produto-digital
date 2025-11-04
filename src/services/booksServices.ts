// src/services/bookService.ts
import { prisma } from "../prisma/client";

export const bookService = {
  getAll: async () => {
    return prisma.book.findMany();
  },

  getById: async (id: number) => {
    return prisma.book.findUnique({ where: { id } });
  },

  create: async (data: {
    id: number;
    titulo: string;
    num_paginas: number;
    isbn: string;
    editora: string;
  }) => {
    return prisma.book.create({ data });
  },

  update: async (
    id: number,
    data: Partial<{
      titulo: string;
      num_paginas: number;
      isbn: string;
      editora: string;
    }>
  ) => {
    return prisma.book.update({ where: { id }, data });
  },

  delete: async (id: number) => {
    return prisma.book.delete({ where: { id } });
  },
};
