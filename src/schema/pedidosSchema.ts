// src/schema/pedidosSchema.ts
import * as z from "zod";

export const PedidoSchema = z.object({
  cliente: z.number().int(),
  status: z.enum(["ABERTO", "FECHADO", "CANCELADO"]),
  descricao: z.string().optional(),
  itens: z.array(
    z.object({
      produtoId: z.number().int(),
      quantidade: z.number().int().min(1),
    })
  ).min(1),
});
