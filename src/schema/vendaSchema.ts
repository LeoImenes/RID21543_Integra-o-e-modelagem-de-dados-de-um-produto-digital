import { Venda } from "@prisma/client";
import * as z from "zod";

export const VendaSchema: z.ZodSchema = z.object({
  pedido: z.number().positive(),
  total: z.number().positive(),
});

export const VendaUpdateSchema: z.ZodSchema = z.object({
  pedido: z.number().positive().optional(),
  total: z.number().positive().optional(),
});
