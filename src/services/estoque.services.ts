import { prisma } from "../prisma/client";
import { Prisma } from "@prisma/client";

export const estoqueService = {
  async create(data: { produtoId: number; quantidade?: number }) {
    return prisma.estoque.create({
      data: {
        quantidade: data.quantidade ?? 0,
        produto: {
          connect: { id: data.produtoId },
        },
      },
    });
  },

  async getAll() {
    return prisma.estoque.findMany({
      include: { produto: true },
    });
  },

  async getById(id: number) {
    return prisma.estoque.findUnique({
      where: { id },
      include: { produto: true },
    });
  },

  async update(id: number, data: Prisma.EstoqueUpdateInput) {
    return prisma.estoque.update({
      where: { id },
      data,
    });
  },

  async delete(id: number) {
    return prisma.estoque.delete({
      where: { id },
    });
  },
};
