import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/client";

export const itensPedidoService = {
  getAll: async () => {
    return prisma.itensPedido.findMany({
      include: {
        produto: true,
        pedido: true,
      },
    });
  },

  getById: async (id: number) => {
    return prisma.itensPedido.findUnique({where: {id}});
  },

  create: async (data: Prisma.ItensPedidoCreateInput) => {
    return prisma.itensPedido.create({
      data,
    });
  },

  update: async (
    id: number,
    data: Partial<Prisma.ItensPedidoUpdateInput>
  ) => {
    return prisma.itensPedido.update({
      where: { id },
      data,
    });
  },

  delete: async (id: number) => {
    return prisma.itensPedido.delete({ where: { id } });
  },
};
