import { Cliente } from "@prisma/client";
import * as z from "zod";

export const EstoqueSchema : z.ZodSchema = z.object({
  produtoId: z.number().int().positive(),
  quantidade: z.number().int().positive(),
});

export const EstoqueUpdateSchema: z.ZodSchema = z.object({
  produtoId: z.number().int().positive().optional(),
  quantidade: z.number().int().positive().optional(),
});
