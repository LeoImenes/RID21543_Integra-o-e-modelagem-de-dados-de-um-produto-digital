import { Prisma, Produtos } from "@prisma/client";
import { prisma } from "../prisma/client";

export const vendaService = {
  getAll: async () => {
    return prisma.venda.findMany();
  },

  getById: async (id: number) => {
    return prisma.venda.findUnique({ where: { id } });
  },

  create: async (data: {pedido:number, total:number}) => {
    return prisma.venda.create({ data: {
      pedido: { connect: { id: data.pedido } },
      total: data.total
    } });
  },

  update: async (
    id: number,
    data: Partial<Prisma.VendaUpdateInput>
  ) => {
    return prisma.venda.update({ where: { id }, data });
  },

  delete: async (id: number) => {
    return prisma.venda.delete({ where: { id } });
  },
};
