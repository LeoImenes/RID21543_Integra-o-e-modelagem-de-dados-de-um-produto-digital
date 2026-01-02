import { ItensPedido } from "@prisma/client";
import * as z from "zod";

export const ItensPedidoSchema: z.ZodSchema = z.object({
     pedidoId: z.number().positive(),
    quantidade: z.number().positive(),
    produtoId: z.number().positive(),
});

export const ItensPedidoUpdateSchema: z.ZodSchema = z.object({
  pedidoId: z.number().positive().optional(),
  quantidade: z.number().positive().optional(),
  produtoId: z.number().positive().optional(),
});
