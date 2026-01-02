import { Prisma, Produtos } from "@prisma/client";
import { prisma } from "../prisma/client";

export type CreateProdutoDTO = {
  nome: string;
  preco: number;
  descricao?: string;
  ativo?: boolean;
};

export const produtoService = {
  getAll: async () => {
    return prisma.produtos.findMany();
  },

  getById: async (id: number) => {
    return prisma.produtos.findUnique({ where: { id } });
  },

  create: async (data: CreateProdutoDTO ) => {
    return prisma.produtos.create({ data });
  },

  update: async (
    id: number,
    data: Partial<CreateProdutoDTO >
  ) => {
    return prisma.produtos.update({ where: { id }, data });
  },

  delete: async (id: number) => {
    return prisma.produtos.delete({ where: { id } });
  },
};
