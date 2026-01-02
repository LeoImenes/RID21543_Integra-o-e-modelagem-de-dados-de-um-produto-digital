// src/services/bookService.ts
import { prisma } from "../prisma/client";

export const clienteService = {
  getAll: async () => {
    return prisma.cliente.findMany();
  },

  getById: async (id: number) => {
    return prisma.cliente.findUnique({ where: { id } });
  },

  create: async (data: {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
  }) => {
    return prisma.cliente.create({ data });
  },

  update: async (
    id: number,
    data: Partial<{
      nome: string;
      email: string;
      telefone: string;
      cpf: string;
    }>
  ) => {
    return prisma.cliente.update({ where: { id }, data });
  },

  delete: async (id: number) => {
    return prisma.cliente.delete({ where: { id } });
  },
};
