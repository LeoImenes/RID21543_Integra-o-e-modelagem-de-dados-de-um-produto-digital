import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/client";

export const pedidosService = {
  getAll: async () => {
    return prisma.pedido.findMany({
      include: {
        cliente: true,
        itens: true, // ✅ corrigido
      },
    });
  },

  getById: async (id: number) => {
    return prisma.pedido.findUnique({
      where: { id },
      include: {
        cliente: true,
        itens: true, // ✅ corrigido
      },
    });
  },

  create: async (data: {
    cliente: number;
    status: string;
    descricao?: string;
    itens: {
      produtoId: number;
      quantidade: number;
    }[];
  }) => {
    return prisma.pedido.create({
      data: {
        status: data.status,
        descricao: data.descricao,
        cliente: {
          connect: { id: data.cliente },
        },
        itens: {
          create: data.itens.map((item) => ({
            quantidade: item.quantidade,
            produto: {
              connect: { id: item.produtoId },
            },
          })),
        },
      },
      include: {
        cliente: true,
        itens: true, // ✅ corrigido
      },
    });
  },

  update: async (id: number, data: Prisma.PedidoUpdateInput) => {
    return prisma.pedido.update({
      where: { id },
      data,
    });
  },

  delete: async (id: number) => {
    return prisma.pedido.delete({ where: { id } });
  },
};
